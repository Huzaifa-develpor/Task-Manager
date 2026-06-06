import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const ViewTasks = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);         // ✅ loading state
  const [showToast, setShowToast] = useState(false);    // ✅ delete toast state

  const token = localStorage.getItem("token");

  const getData = async () => {
    setLoading(true);                                    // fetch shuru hote hi loading true
    try {
      const res = await axios.get(
        "https://task-manager-production-1a8a.up.railway.app/web/todos/view",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTaskList(res.data.todoView || []);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      setTaskList([]);
    } finally {
      setLoading(false);                                 // done hone par loading false
    }
  };

  const delTask = async (id) => {
    try {
      await axios.delete(
        `https://task-manager-production-1a8a.up.railway.app/web/todos/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ alert() hata ke toast show karo
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      getData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* ✅ Delete Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl shadow-slate-900/20 animate-fade-in-up">
          <div className="w-7 h-7 bg-rose-500 rounded-lg flex items-center justify-center text-xs flex-shrink-0">
            🗑️
          </div>
          <span className="text-sm font-medium">Task deleted successfully</span>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-8 border-b border-slate-200 pb-5">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Your Tasks</h1>
          <p className="text-sm text-slate-500 mt-2">
            Manage, review, and track all your ongoing tasks in one place.
          </p>
        </div>

        {/* ✅ Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-9 h-9 border-[3px] border-slate-200 border-t-indigo-500 rounded-full animate-spin" />
            <p className="text-sm text-slate-400 font-medium">Loading your tasks...</p>
          </div>

        ) : taskList.length === 0 ? (
          /* Empty State — sirf tab jab loading done ho aur tasks zero hon */
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-400 mb-4">
              📋
            </div>
            <h3 className="text-base font-semibold text-slate-700">No tasks found</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xs mx-auto">
              It looks like you haven't added any tasks yet. Start by creating a new one!
            </p>
          </div>

        ) : (
          /* Task Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskList.map((task) => (
              <div
                key={task._id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-200"
              >
                <div className="space-y-3 pr-8">
                  <h3 className="text-lg font-bold text-slate-800 leading-snug break-words tracking-tight group-hover:text-indigo-600 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words whitespace-pre-line">
                    {task.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-end items-center">
                  <button
                    onClick={() => delTask(task._id)}
                    className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200"
                    title="Delete Task"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ViewTasks;