import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Categories } from '../pages/Categories';
import { Cart } from '../pages/Cart';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Profile } from '../pages/Profile';
import { Admin } from '../pages/Admin';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';

export const AppRoutes = {
  public: [
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/categories', element: <Categories /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ],
  protected: [
    { path: '/cart', element: <Cart /> },
    { path: '/profile', element: <Profile /> },
  ],
  admin: [
    { path: '/admin', element: <Admin /> },
  ],
};

export const renderRoutes = () => (
  <>
    {AppRoutes.public.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
    
    {AppRoutes.protected.map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <ProtectedRoute>
            {element}
          </ProtectedRoute>
        }
      />
    ))}
    
    {AppRoutes.admin.map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <ProtectedRoute requireAdmin>
            {element}
          </ProtectedRoute>
        }
      />
    ))}
  </>
);