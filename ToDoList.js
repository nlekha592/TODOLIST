import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './ToDoList.css';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
  ]);

  const handleAddTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
        />
      ))}
      <AddTodoForm onAdd={handleAddTodo} />
    </div>
  );
};

export default TodoList;
