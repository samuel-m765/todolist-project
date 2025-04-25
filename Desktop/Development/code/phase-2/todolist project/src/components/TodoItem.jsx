import React, { useState } from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleDelete = () => {
    setIsBouncing(true);
    setTimeout(() => deleteTodo(todo.id), 300);
  };

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-xl bg-white shadow-sm hover:bg-pink-100 transition ${
        isBouncing ? "animate-bounce" : ""
      } ${todo.completed ? "line-through text-gray-400" : ""}`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-3 h-5 w-5 text-pink-500 focus:ring-pink-400 rounded"
        />
        <span className="text-gray-700">{todo.task}</span>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-400 hover:text-red-500 font-bold text-sm"
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
