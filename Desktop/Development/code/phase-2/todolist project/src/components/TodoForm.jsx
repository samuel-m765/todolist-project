import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="write the activities here"
        className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 w-full bg-pink-400 text-white p-3 rounded-xl hover:bg-pink-500 transition"
      >
        Add to Your Day!
      </button>
    </div>
  );
};

export default TodoForm;
