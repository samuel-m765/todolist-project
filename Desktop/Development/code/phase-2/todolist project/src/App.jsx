
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Morning Stretch (10 mins)", completed: false },
    { id: 2, task: "Reply to Emails ", completed: false },
    { id: 3, task: "Grocery Run (45 mins)", completed: false },
    { id: 4, task: "Work on Project X (1 hour)", completed: false },
    { id: 5, task: "Call a Friend (15 mins)", completed: false },
    { id: 6, task: "Wind Down (20 mins)", completed: false },
  ]);

  const [message, setMessage] = useState("");

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setMessage("Woohoo! You’re crushing it! ");
    setTimeout(() => setMessage(""), 2000);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setMessage("Poof! Task gone—nice one! ");
    setTimeout(() => setMessage(""), 2000);
  };

  const addTodo = (task) => {
    setTodos([...todos, { id: todos.length + 1, task, completed: false }]);
    setMessage("New task added! Let’s do this! ");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">
        My Cozy Todo Buddy with time taken
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Hello,add your  daily activities. Ready? 
      </p>
      {message && (
        <p className="text-pink-500 text-center mb-4 animate-pulse">{message}</p>
      )}
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
     
    </div>
  );
};

export default App;
