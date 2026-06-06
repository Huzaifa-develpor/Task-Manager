import React, { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";



const Login = () => {

  const navigate = useNavigate();

  const [error, setError] = useState("");



  const [loginData, setLoginData] = useState({

    email: "",

    password: "",

  });



  const onChange = (e) => {

    setError("");

    setLoginData((prev) => ({

      ...prev,

      [e.target.name]: e.target.value,

    }));

  };



  const handleSubmit = async (e) => {

    e.preventDefault();



    try {

      const res = await axios.post(

        "https://task-manager-production-1a8a.up.railway.app/web/todos/login",

        loginData

      );



      if (res.data.message === "Login Successful") {

        localStorage.setItem("token", res.data.token);

        navigate("/");

      } else {

        setError("Invalid Email or Password");

      }

    } catch (err) {

      setError("Server Error Try Again Later");

    }

  };



  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

     

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-100">

       

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-gray-800">

          Welcome Back

        </h1>



        <p className="text-center text-gray-500 mt-2">

          Login to continue managing your tasks

        </p>



        {/* Form */}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

         

          <input

            type="email"

            name="email"

            placeholder="Enter Email"

            value={loginData.email}

            onChange={onChange}

            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"

          />



          <input

            type="password"

            name="password"

            placeholder="Enter Password"

            value={loginData.password}

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

            Login

          </button>

        </form>



        {/* Footer */}

        <p className="text-center mt-5 text-sm text-gray-600">

          Don't have an account?{" "}

          <Link to="/signup" className="text-blue-500 font-medium">

            Sign up

          </Link>

        </p>



      </div>

    </div>

  );

};



export default Login;

