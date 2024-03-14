// Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable.
// The todos state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the todos array.


import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleReset = () => {
    setTodos([]);
  };

  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add To do</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>
              Delete To do
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
