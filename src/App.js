// App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Modal from './Modal';
import TodoList from './TodoList';
import styles from './Todo.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load Todos from Local Storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save Todos to Local Storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const updatedText = prompt('Edit Todo:', todos.find((todo) => todo.id === id).text);
    if (updatedText !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: updatedText } : todo
        )
      );
    }
  };

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Input className={styles.input} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button className={styles.button} onClick={addTodo}>Add Todo</Button>
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      <Button className={styles.button} onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className={styles.modalContent}>This is a modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
