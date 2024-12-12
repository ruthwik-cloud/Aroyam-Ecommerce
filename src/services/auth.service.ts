import { supabase } from '../lib/supabase';
import { CustomerData, User } from '../types';

export const authService = {
  async register(data: CustomerData) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (authError) throw authError;

    // Insert additional user data into profiles table
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user!.id,
        username: data.username,
        phone: data.phone,
        email: data.email,
      });

    if (profileError) throw profileError;

    return authData.user;
  },

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Get user profile data
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    return {
      id: data.user.id,
      email: data.user.email!,
      username: profile?.username || '',
      role: profile?.role || 'user',
      phone: profile?.phone || '',
    };
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return {
      id: user.id,
      email: user.email!,
      username: profile?.username || '',
      role: profile?.role || 'user',
      phone: profile?.phone || '',
    };
  },
};