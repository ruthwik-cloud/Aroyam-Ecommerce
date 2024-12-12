import React from 'react';
import { ArrowRight, Leaf, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export const Home = () => {
  const addItem = useCartStore((state) => state.addItem);
  
  const seasonalVegetables = [
    {
      id: '1',
      name: 'Fresh Spinach',
      description: 'Nutrient-rich, organic spinach leaves',
      imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400',
      price: 2.99,
      farmName: 'Green Valley Farm',
      category: 'Leafy Greens',
      inStock: true,
      seasonal: true
    },
    {
      id: '2',
      name: 'Organic Carrots',
      description: 'Sweet and crunchy organic carrots',
      imageUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=400',
      price: 3.49,
      farmName: 'Sunrise Organics',
      category: 'Root Vegetables',
      inStock: true,
      seasonal: true
    },
    {
      id: '3',
      name: 'Fresh Tomatoes',
      description: 'Vine-ripened, juicy tomatoes',
      imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400',
      price: 4.99,
      farmName: 'Red Earth Farm',
      category: 'Vegetables',
      inStock: true,
      seasonal: true
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[600px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=2000"
          alt="Fresh vegetables"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="max-w-2xl ml-8 md:ml-16 text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome to Arogam
            </h1>
            <p className="text-xl md:text-2xl">
              Your source for farm-fresh organic vegetables, delivered right to your doorstep
            </p>
            <Link
              to="/products"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-emerald-50 p-6 rounded-xl text-center">
          <Leaf className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
          <p className="text-gray-600">All our vegetables are certified organic and pesticide-free</p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-xl text-center">
          <Truck className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Same-day delivery for orders placed before 2 PM</p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-xl text-center">
          <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Local Farmers</h3>
          <p className="text-gray-600">Supporting local farmers and sustainable agriculture</p>
        </div>
      </div>

      {/* Seasonal Picks */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Seasonal Picks</h2>
          <Link to="/products" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonalVegetables.map((vegetable) => (
            <div key={vegetable.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={vegetable.imageUrl}
                alt={vegetable.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{vegetable.name}</h3>
                <p className="text-gray-600 mb-2">{vegetable.farmName}</p>
                <p className="text-sm text-gray-500 mb-4">{vegetable.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold">{vegetable.price}</span>
                  <button 
                    onClick={() => addItem(vegetable)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-12 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Subscribe to Weekly Veggie Box</h2>
          <p className="text-xl">Get fresh, seasonal vegetables delivered every week</p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition">
            Start Subscription
          </button>
        </div>
      </section>
    </div>
  );
};