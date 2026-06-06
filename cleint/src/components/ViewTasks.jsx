import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const ViewTasks = () => {
  const [taskList, setTaskList] = useState([]);

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://task-manager-production-3ca0.up.railway.app/web/todos/view",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setTaskList(res.data.todoView );
        console.log(res.data.todoView);
        console.log(token);
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setTaskList([]);
    }
  };

  const delTask = async (DelId) => {
    try {
      await axios.delete(
        `https://task-manager-production-3ca0.up.railway.app/web/todos/delete/${DelId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Deleted Successfully");
      getData();
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Failed to delete task");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <h2 className="text-3xl font-bold text-center mt-6 text-gray-800">
        View Tasks
      </h2>

      <div className="flex flex-col items-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12">
          {Array.isArray(taskList) && taskList.length > 0 ? (
            taskList.map((task) => (
              <div
                key={task._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col h-48"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xl font-semibold text-gray-800 truncate">
                    {task.title}
                  </h4>

                  <button
                    onClick={() => delTask(task._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-2 transition"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>

                <div className="text-gray-600 text-sm overflow-y-auto flex-1 pr-1">
                  {task.description}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-500 col-span-2 mt-4">
              No tasks available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;