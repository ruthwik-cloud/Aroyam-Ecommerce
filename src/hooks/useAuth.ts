import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { authService } from '../services/auth.service';

export const useAuth = () => {
  const { user, login, logout } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          login(currentUser);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    if (!user) {
      checkAuth();
    }
  }, [user, login]);

  return { user, isAuthenticated: !!user };
};