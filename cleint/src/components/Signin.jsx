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
        "https://task-manager-production-3ca0.up.railway.app/web/todos/registerUser",
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-100 p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign up to manage your tasks
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={signinData.name}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={signinData.email}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={signinData.password}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;