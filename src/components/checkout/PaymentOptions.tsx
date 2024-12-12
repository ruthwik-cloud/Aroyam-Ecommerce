import React from 'react';
import { CreditCard, Wallet, Banknote } from 'lucide-react';

type PaymentMethod = 'card' | 'upi' | 'cod';

interface PaymentOptionsProps {
  selectedMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ selectedMethod, onSelect }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Payment Method</h3>
      
      <div className="grid gap-4">
        <button
          onClick={() => onSelect('card')}
          className={`flex items-center p-4 border rounded-lg ${
            selectedMethod === 'card' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
          }`}
        >
          <CreditCard className="h-6 w-6 text-emerald-600 mr-3" />
          <div className="text-left">
            <p className="font-medium">Credit/Debit Card</p>
            <p className="text-sm text-gray-500">Pay securely with your card</p>
          </div>
        </button>

        <button
          onClick={() => onSelect('upi')}
          className={`flex items-center p-4 border rounded-lg ${
            selectedMethod === 'upi' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
          }`}
        >
          <Wallet className="h-6 w-6 text-emerald-600 mr-3" />
          <div className="text-left">
            <p className="font-medium">UPI</p>
            <p className="text-sm text-gray-500">Pay using UPI apps</p>
          </div>
        </button>

        <button
          onClick={() => onSelect('cod')}
          className={`flex items-center p-4 border rounded-lg ${
            selectedMethod === 'cod' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
          }`}
        >
          <Banknote className="h-6 w-6 text-emerald-600 mr-3" />
          <div className="text-left">
            <p className="font-medium">Cash on Delivery</p>
            <p className="text-sm text-gray-500">Pay when you receive</p>
          </div>
        </button>
      </div>
    </div>
  );
};