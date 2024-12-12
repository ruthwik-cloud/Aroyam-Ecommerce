import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Sprout } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';

export const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { items } = useCartStore();

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8" />
              <span className="font-bold text-xl">Arogam</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/products" className="hover:text-emerald-200 transition">Products</Link>
            <Link to="/categories" className="hover:text-emerald-200 transition">Categories</Link>
            
            <Link to="/cart" className="relative hover:text-emerald-200 transition">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-emerald-200 transition">
                  <User className="h-6 w-6" />
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="hover:text-emerald-200 transition">
                    Admin
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-full transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-full transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};