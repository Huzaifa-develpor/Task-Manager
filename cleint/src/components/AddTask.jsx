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

      <form onSubmit={saveData}>
        <input
          name="title"
          value={todoData.title}
          onChange={getValue}
          placeholder="Title"
        />

        <textarea
          name="description"
          value={todoData.description}
          onChange={getValue}
          placeholder="Description"
        />

        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTask;