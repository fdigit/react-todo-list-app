// Todo.js
import React from 'react';
import styles from './Todo.module.css';

const Todo = ({ todo, onDelete, onEdit }) => {
  return (
    <div className={styles.todo}>
      <span>{todo.text}</span>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
