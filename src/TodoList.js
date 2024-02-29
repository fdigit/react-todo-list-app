// TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoList;
