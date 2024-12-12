import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Spinach',
    description: 'Nutrient-rich, organic spinach leaves',
    price: 40, // Changed to INR
    category: 'Leafy Greens',
    imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400',
    farmName: 'Green Valley Farm',
    inStock: true,
    seasonal: true
  },
  {
    id: '2',
    name: 'Organic Carrots',
    description: 'Sweet and crunchy organic carrots',
    price: 35, // Changed to INR
    category: 'Root Vegetables',
    imageUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=400',
    farmName: 'Sunrise Organics',
    inStock: true,
    seasonal: true
  },
  // ... other products with INR prices
];