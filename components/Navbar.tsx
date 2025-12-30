
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const isAuthenticated = authService.isAuthenticated();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-indigo-600 italic">
              {APP_NAME}
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium transition">Home</Link>
            <Link to="/men" className="text-slate-600 hover:text-indigo-600 font-medium transition">Men</Link>
            <Link to="/women" className="text-slate-600 hover:text-indigo-600 font-medium transition">Women</Link>
            <Link to="/kids" className="text-slate-600 hover:text-indigo-600 font-medium transition">Kids</Link>
            <Link to="/contact" className="text-slate-600 hover:text-indigo-600 font-medium transition">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 font-medium transition">
                  <i className="fa-solid fa-user-circle mr-1"></i> Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-slate-600 hover:text-indigo-600 font-medium transition">Login</Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
