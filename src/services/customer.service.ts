import { supabase } from '../lib/supabase';
import { Address } from '../types';

export const customerService = {
  async getAddresses(userId: string) {
    const { data, error } = await supabase
      .from('addresses')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data;
  },

  async addAddress(userId: string, address: Omit<Address, 'id'>) {
    const { data, error } = await supabase
      .from('addresses')
      .insert({
        user_id: userId,
        ...address,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateProfile(userId: string, data: { username?: string; phone?: string }) {
    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', userId);

    if (error) throw error;
  },
};