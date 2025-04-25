import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
<ul className="space-y-3">
  {todos.length === 0 ? (
    <li className="text-gray-500 text-center">All done! Time for a cozy break? ☕</li>
  ) : (
    todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))
  )}
</ul>

  );
};

export default TodoList;
