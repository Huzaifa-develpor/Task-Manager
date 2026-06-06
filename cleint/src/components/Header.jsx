import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTasks, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-white hover:opacity-90 transition">
          <FaTasks className="text-blue-500 text-2xl" />
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            TaskManager
          </span>
        </Link>

        {/* Dynamic Navigation Action Triggers */}
        <div className="flex items-center gap-4">
          {token ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-slate-800 hover:bg-red-950/40 text-slate-300 hover:text-red-400 border border-slate-700 hover:border-red-900/50 px-4 py-2 rounded-xl text-sm font-medium transition duration-200"
            >
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 transition duration-200"
              >
                <FaSignInAlt /> Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20 transition duration-200"
              >
                <FaUserPlus /> Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Header;