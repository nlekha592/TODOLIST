import React, { useState } from 'react';
import './ToDoList.css';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    onUpdate(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={handleToggleEdit}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={handleDelete}>Delete</button>
      {isEditing && <button onClick={handleUpdate}>Update</button>}
    </div>
  );
};

export default TodoItem;
