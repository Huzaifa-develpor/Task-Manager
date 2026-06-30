import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

const AddTask = () => {
  const [todoData, setTodoData] = useState({ title: "", description: "" });
  const [showToast, setShowToast] = useState(false);

  const token = localStorage.getItem("token");
  const getValue = (e) => {
    setTodoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveData = (e) => {
    e.preventDefault();
    axios
      .post("https://task-manager-production-09cc.up.railway.app/web/todos/add", todoData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        
        setShowToast(true);
        setTodoData({ title: "", description: "" });
        
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />

      {/* Modern Pop-up Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center p-4 mb-4 w-full max-w-xs text-slate-800 bg-white rounded-xl shadow-lg border border-emerald-100 shadow-emerald-500/5 animate-bounce-short">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-emerald-500 bg-emerald-50 rounded-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide">Task Added Successfully!</div>
        </div>
      )}

      {/* Form Container (Baqi UI bilkul same hai) */}
      <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Create New Task</h2>
            <p className="text-sm text-slate-500 mt-1">Fill in the details below to add a new task to your list.</p>
          </div>

          <form onSubmit={saveData} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Task Title</label>
              <input type="text" name="title" value={todoData.title} onChange={getValue} placeholder="e.g., Design UI mockups" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Description</label>
              <textarea name="description" value={todoData.description} onChange={getValue} placeholder="Describe what needs to be done..." rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none" required />
            </div>

            <button type="submit" className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-all text-sm tracking-wide">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;