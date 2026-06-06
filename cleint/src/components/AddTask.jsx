import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

const AddTask = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  const getValue = (e) => {
    setTodoData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveData = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://task-manager-production-1a8a.up.railway.app/web/todos/add",
        todoData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ FIXED
          },
        }
      )
      .then((res) => {
        alert("Task Added Successfully");
        setTodoData({ title: "", description: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />

      {/* Main Container Container */}
      <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-4">
        
        {/* Card Wrapper */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 transition-all hover:shadow-md">
          
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Create New Task</h2>
            <p className="text-sm text-slate-500 mt-1">Fill in the details below to add a new task to your list.</p>
          </div>

          {/* Form */}
          <form onSubmit={saveData} className="space-y-5">
            
            {/* Title Input Group */}
            <div className="space-y-1.5">
              <label htmlFor="title" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Task Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={todoData.title}
                onChange={getValue}
                placeholder="e.g., Design UI mockups"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                required
              />
            </div>

            {/* Description Input Group */}
            <div className="space-y-1.5">
              <label htmlFor="description" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={todoData.description}
                onChange={getValue}
                placeholder="Describe what needs to be done..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl shadow-sm shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all text-sm tracking-wide"
            >
              Add Task
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;