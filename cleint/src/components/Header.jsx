import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between sm:px-6 lg:px-8">
          
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-indigo-500/20">
              T
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                Task Manager
              </h1>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5 hidden sm:block">
                Manage your daily tasks easily
              </p>
            </div>
          </Link>

          {/* Navigation Action Buttons (Login / Signup) */}
          <div className="flex items-center space-x-3">
            
            {/* Login Button */}
            <Link 
              to="/login" 
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all duration-200"
            >
              Log In
            </Link>

            {/* Signup Button */}
            <Link 
              to="/signup" 
              className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl shadow-sm shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200"
            >
              Sign Up
            </Link>

          </div>

        </div>
      </header>
    </>
  );
};

export default Header;