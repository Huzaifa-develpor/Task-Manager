import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';

const AddTask = () => {
  const [todoData, setTodoData] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const getValue = (e) => {
    setTodoData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveData = async (e) => {
    e.preventDefault();
    if (!todoData.title.trim()) return alert("Title is required");
    
    setLoading(false);
    try {
      await axios.post(
        "https://task-manager-production-3ca0.up.railway.app/web/todos/add", 
        todoData,
        { headers: { Authorization: `Bearer ${token}` } } // FIXED SPACE HERE
      );
      alert("Task Added Successfully");
      setTodoData({ title: "", description: "" });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to save data. Login token might be expired.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <div className="flex justify-center px-4 mt-16">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-tight">Create Task</h2>
          
          <form onSubmit={saveData} className="space-y-5">
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Task Title</label>
              <input
                type="text"
                placeholder="What needs to be done?"
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-light text-sm"
                name="title"
                value={todoData.title}
                onChange={getValue}
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Description</label>
              <textarea
                placeholder="Add contextual parameters or subtasks…"
                rows="4"
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-light text-sm resize-none"
                name="description"
                value={todoData.description}
                onChange={getValue}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-blue-600/10 mt-2"
            >
              Save Parameters
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;