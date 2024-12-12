import React from 'react';
import { ShoppingBag, Users, Package } from 'lucide-react';

interface AdminHeaderProps {
  activeTab: 'products' | 'orders' | 'users';
  setActiveTab: (tab: 'products' | 'orders' | 'users') => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('products')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'products'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Products</span>
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'orders'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Package className="h-5 w-5" />
          <span>Orders</span>
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'users'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Users className="h-5 w-5" />
          <span>Users</span>
        </button>
      </div>
    </>
  );
};