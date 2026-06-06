import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaList } from 'react-icons/fa';
import Header from './Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center -mt-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Simplify Your <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Daily Workflow</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            An elegant, secure, and minimal space designed to easily organize, map, and view your operations to stay highly efficient.
          </p>
        </div>

        {/* Navigation Action Container */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link to="/AddTask">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-semibold shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5 transition duration-200">
              <FaPlus /> Add Task
            </button>
          </Link>
          <Link to="/ViewTasks">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl font-semibold border border-slate-700 hover:-translate-y-0.5 transition duration-200">
              <FaList /> View Dashboard
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;