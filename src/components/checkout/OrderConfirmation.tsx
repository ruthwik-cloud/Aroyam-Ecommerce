import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

interface OrderConfirmationProps {
  orderId: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderId }) => {
  return (
    <div className="text-center py-8 px-4">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="animate-ping absolute h-16 w-16 rounded-full bg-emerald-400 opacity-75"></div>
          <CheckCircle className="relative h-16 w-16 text-emerald-500" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
      <p className="text-gray-600 mb-6">Your order #{orderId} has been placed successfully</p>
      
      <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Package className="h-5 w-5 text-emerald-500 mr-2" />
            <span>Order Processing</span>
          </div>
          <CheckCircle className="h-5 w-5 text-emerald-500" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Truck className="h-5 w-5 text-emerald-500 mr-2" />
            <span>Estimated Delivery</span>
          </div>
          <span className="font-medium">2 Days</span>
        </div>
      </div>
    </div>
  );
};