
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold italic mb-4">{APP_NAME}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your one-stop destination for premium, sustainable fashion for men, women, and kids.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-indigo-400">Shop</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#/men" className="hover:text-white transition">Men's Collection</a></li>
              <li><a href="#/women" className="hover:text-white transition">Women's Collection</a></li>
              <li><a href="#/kids" className="hover:text-white transition">Kid's Collection</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-indigo-400">Support</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-indigo-400">Connect</h3>
            <div className="flex space-x-4 text-xl text-slate-400">
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} {APP_NAME} Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
