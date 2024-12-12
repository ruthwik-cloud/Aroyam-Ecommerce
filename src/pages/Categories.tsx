import React, { useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

export const Categories = () => {
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories.map(category => ({
      name: category,
      products: products.filter(product => product.category === category)
    }));
  }, []);

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
      
      {categories.map(category => (
        <section key={category.name} className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-700">{category.name}</h2>
            <span className="text-emerald-600">{category.products.length} items</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};