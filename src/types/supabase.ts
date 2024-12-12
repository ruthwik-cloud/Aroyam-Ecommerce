export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          email: string
          phone: string
          role: 'user' | 'admin'
          created_at: string
        }
        Insert: {
          id: string
          username: string
          email: string
          phone: string
          role?: 'user' | 'admin'
        }
        Update: {
          username?: string
          email?: string
          phone?: string
          role?: 'user' | 'admin'
        }
      }
      addresses: {
        Row: {
          id: string
          user_id: string
          street: string
          city: string
          state: string
          zipcode: string
          is_default: boolean
          created_at: string
        }
        Insert: {
          user_id: string
          street: string
          city: string
          state: string
          zipcode: string
          is_default?: boolean
        }
        Update: {
          street?: string
          city?: string
          state?: string
          zipcode?: string
          is_default?: boolean
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          items: Json
          total: number
          status: 'pending' | 'processing' | 'shipped' | 'delivered'
          address_id: string
          created_at: string
        }
        Insert: {
          user_id: string
          items: Json
          total: number
          status: 'pending' | 'processing' | 'shipped' | 'delivered'
          address_id: string
        }
        Update: {
          status?: 'pending' | 'processing' | 'shipped' | 'delivered'
        }
      }
    }
  }
}