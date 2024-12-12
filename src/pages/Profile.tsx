import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';
import { User, Package, MapPin } from 'lucide-react';

export const Profile = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'delivered',
      total: 45.97,
      items: ['Fresh Spinach', 'Organic Carrots', 'Bell Peppers']
    },
    {
      id: '2',
      date: '2024-03-10',
      status: 'processing',
      total: 32.50,
      items: ['Sweet Potatoes', 'Fresh Tomatoes']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-emerald-100 p-3 rounded-full">
            <User className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.username}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Delivery Address
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>123 Main Street</p>
              <p>Apartment 4B</p>
              <p>New York, NY 10001</p>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700">
              Edit Address
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Package className="h-5 w-5" />
              Subscription Status
            </h3>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="font-medium">Weekly Veggie Box</p>
              <p className="text-gray-600">Next delivery: March 22, 2024</p>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-6">Order History</h3>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border-b pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  order.status === 'delivered' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <p className="text-gray-600">{order.items.join(', ')}</p>
              <p className="text-emerald-600 font-medium mt-2">
                Total: ${order.total}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};