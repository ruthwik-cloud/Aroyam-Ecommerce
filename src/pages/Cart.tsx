import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PaymentOptions } from '../components/checkout/PaymentOptions';
import { OrderConfirmation } from '../components/checkout/OrderConfirmation';
import { formatPrice } from '../utils/currency';
import { orderService } from '../services/order.service';

export const Cart = () => {
  const { items, total, removeItem, updateQuantity, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [orderId, setOrderId] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (paymentMethod === 'cod') {
      try {
        const order = await orderService.createOrder(user!.id, items, "default-address");
        setOrderId(order.id);
        clearCart();
      } catch (error) {
        console.error('Failed to create order:', error);
      }
    }
    // Handle other payment methods here
  };

  if (orderId) {
    return <OrderConfirmation orderId={orderId} />;
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {!showPayment ? (
          <>
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center py-4 border-b">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">{item.product.farmName}</p>
                  <p className="text-emerald-600 font-bold">{formatPrice(item.product.price)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.product.id)}
                  className="ml-4 p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}

            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">Total: {formatPrice(total)}</p>
              </div>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <PaymentOptions
              selectedMethod={paymentMethod}
              onSelect={setPaymentMethod}
            />
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-xl font-bold text-emerald-600">{formatPrice(total)}</span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-emerald-600 text-white py-3 rounded-full hover:bg-emerald-700 transition"
              >
                {paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Pay'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};