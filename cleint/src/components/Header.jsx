import React from "react";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between sm:px-6 lg:px-8">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Decent Badge (Status dikhane ke liye ya clean aesthetic ke liye) */}
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Sync
            </span>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;