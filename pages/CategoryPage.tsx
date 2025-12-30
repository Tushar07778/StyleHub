
import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const displayCategory = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : '';
  const filteredProducts = PRODUCTS.filter(p => p.category.toLowerCase() === categoryName?.toLowerCase());

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{displayCategory} Collection</h1>
          <p className="text-slate-500 max-w-lg mx-auto">Explore our finest selection of garments handcrafted for quality and endurance.</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <i className="fa-solid fa-box-open text-6xl text-slate-200 mb-4"></i>
            <p className="text-slate-500 text-lg">No products found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
