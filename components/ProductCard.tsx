
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white text-slate-900 transition">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-indigo-500 font-semibold tracking-wider uppercase mb-1">{product.category}</p>
        <h3 className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-slate-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-slate-900">
            {'$'}{product.price.toFixed(2)}
          </span>
          <button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
