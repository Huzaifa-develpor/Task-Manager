import React, { useState } from "react";
import axios from "react-save";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setError("");
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://task-manager-production-3ca0.up.railway.app/web/todos/login", loginData);
      if (res.data.message === "Login Successful") {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        setError("Invalid Email or Password");
      }
    } catch (err) {
      setError("Authentication failed. Invalid parameters.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white tracking-tight">Welcome Back</h1>
        <p className="text-center text-slate-500 mt-2 text-sm font-light">Login to continue tracking analytics</p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Account Email"
            value={loginData.email}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-800 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm font-light"
          />
          <input
            type="password"
            name="password"
            placeholder="Secure Password"
            value={loginData.password}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-800 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm font-light"
          />

          {error && <p className="text-red-400 text-xs font-medium pl-1">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-semibold transition duration-200 shadow-lg shadow-blue-600/10 mt-2">
            Authenticate
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-slate-500 font-light">
          Don't have an operational matrix?{" "}
          <Link to="/signup" className="text-blue-400 font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;