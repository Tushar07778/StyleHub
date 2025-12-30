
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-indigo-600 px-8 py-10 text-white relative">
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 text-white/80 hover:text-white flex items-center gap-2 text-sm font-medium transition"
            >
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold backdrop-blur-sm">
                {user.fullName.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Welcome to StyleHub, {user.fullName.split(' ')[0]}!</h1>
                <p className="text-indigo-100 opacity-90">Manage your profile and track your orders</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <p className="text-slate-700 font-medium">{user.fullName}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <p className="text-slate-700 font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Member Since</label>
                    <p className="text-slate-700 font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Recent Activity</h3>
                <div className="bg-slate-50 rounded-2xl p-6 text-center text-slate-500 text-sm">
                  <i className="fa-solid fa-clock-rotate-left mb-2 text-2xl opacity-50 block"></i>
                  No recent orders yet. Start shopping to see history!
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex-1 sm:flex-none"
              >
                Go to Home
              </button>
              <button 
                onClick={() => {
                  authService.logout();
                  navigate('/login');
                }}
                className="bg-white text-red-500 border border-red-200 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition flex-1 sm:flex-none"
              >
                Logout Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
