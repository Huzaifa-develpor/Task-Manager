import React, { useEffect, useState } from "react";
import Header from "./Header";
import { FaTrash, FaInbox } from "react-icons/fa";
import axios from "axios";

const ViewTasks = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const res = await axios.get('https://task-manager-production-3ca0.up.railway.app/web/todos/view', {
        headers: { 
          // Bearer aur token ke darmiyan space hona lazmi hai taake middleware breakdown na ho
          Authorization: `Bearer ${token}` 
        }
      });
      setTaskList(res.data.todoView);
    } catch (err) {
      console.error("Data Fetch Failed: ", err);
    } finally {
      setLoading(false);
    } 
  };
     

  const delTask = async (DelId) => {
    try {
      await axios.delete(`https://task-manager-production-3ca0.up.railway.app/web/todos/delete/${DelId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Task Erased Successfully");
      getData();
    } catch (err) {
      console.error("Deletion Failed: ", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <h2 className="text-3xl font-bold text-center mt-10 text-white tracking-tight">Active Dashboard</h2>
      
      <div className="flex flex-col items-center mt-8 px-4">
        {loading ? (
          <p className="text-slate-400 text-sm animate-pulse">Syncing live server state...</p>
        ) : taskList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {taskList.map((task) => (
              <div key={task._id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-48 hover:border-slate-700 transition group duration-200 shadow-xl">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-lg font-bold text-slate-100 truncate group-hover:text-blue-400 transition duration-200">{task.title}</h4>
                  <button 
                    onClick={() => delTask(task._id)}
                    className="bg-slate-950 hover:bg-red-950/50 border border-slate-800 hover:border-red-900 text-slate-400 hover:text-red-400 p-2.5 rounded-xl transition flex items-center"
                  >
                    <FaTrash size={14}/>
                  </button>
                </div>
                <div className="text-slate-400 text-sm font-light overflow-y-auto flex-1 mt-3 pr-1 leading-relaxed">
                  {task.description || <span className="text-slate-600 italic">No description appended.</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 flex flex-col items-center gap-3">
            <FaInbox className="text-4xl text-slate-700" />
            <p className="text-sm font-light">Database allocation empty. Create some tasks on your new account!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTasks;