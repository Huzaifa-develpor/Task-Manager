import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [signinData, setSigninData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChange = (e) => {
    setError("");

    setSigninData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://task-manager-production-1a8a.up.railway.app/web/todos/registerUser",
        signinData
      );

      console.log(res.data);

      setSigninData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");

    } catch (err) {
      console.log(err);
      setError("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      
      {/* Upper Branding (Login page se consistency match karne ke liye) */}
      <div className="mb-6 flex items-center space-x-2">
        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
          T
        </div>
        <span className="text-lg font-bold text-slate-900 tracking-tight">Taskify</span>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 transition-all">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Create Account
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Sign up now to start seamlessly managing your daily tasks
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-5 p-3.5 bg-rose-50 border border-rose-100 rounded-xl flex items-center space-x-2.5 text-rose-600 text-xs font-medium">
            <span className="text-sm">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={signinData.name}
              onChange={onChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              value={signinData.email}
              onChange={onChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={signinData.password}
              onChange={onChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-medium shadow-sm shadow-indigo-500/10 hover:bg-indigo-700 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all text-sm tracking-wide mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-8 text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors ml-1">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;