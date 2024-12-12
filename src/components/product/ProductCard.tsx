import React from 'react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <span className="bg-emerald-100 text-emerald-800 text-sm px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-gray-500 text-sm mb-4">{product.farmName}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-600">
            ${product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition"
          >
            Add to Cart
          </button>
        </div>
        
        {product.seasonal && (
          <span className="mt-2 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            Seasonal
          </span>
        )}
      </div>
    </div>
  );
};