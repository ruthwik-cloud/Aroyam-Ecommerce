import { supabase } from '../lib/supabase';
import { CartItem, Order } from '../types';

export const orderService = {
  async createOrder(userId: string, items: CartItem[], addressId: string) {
    const { data, error } = await supabase
      .from('orders')
      .insert({
        user_id: userId,
        items,
        status: 'pending',
        address_id: addressId,
        total: items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getUserOrders(userId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        addresses (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getOrderById(orderId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        addresses (*)
      `)
      .eq('id', orderId)
      .single();

    if (error) throw error;
    return data;
  },
};