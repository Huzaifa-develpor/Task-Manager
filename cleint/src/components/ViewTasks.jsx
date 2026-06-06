import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";

const ViewTasks = () => {
  const [taskList, setTaskList] = useState([]);

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://task-manager-production-3ca0.up.railway.app/web/todos/view",
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ FIXED
          },
        }
      );

      setTaskList(res.data.todoView || []);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      setTaskList([]);
    }
  };

  const delTask = async (id) => {
    try {
      await axios.delete(
        `https://task-manager-production-3ca0.up.railway.app/web/todos/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ FIXED
          },
        }
      );

      alert("Task Deleted");
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />

      {taskList.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <button onClick={() => delTask(task._id)}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewTasks;