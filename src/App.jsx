import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Importa el archivo CSS de Bootstrap
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showButton, setShowButton] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowButton(event.target.value !== '');

    if (event.keyCode === 13 && event.target.value.trim() !== '') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
      setShowButton(false);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = <strike>{updatedTodos[index]}</strike>;
    setTodos(updatedTodos);
  };

  return (
    <div className='body'>
      <h1>T O D O</h1>
      <div className="div">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputChange}
          placeholder="Agregar tarea"
        />
        {showButton && (
          <button className='btn-add' onClick={handleAddTodo}>Agregar</button>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span onClick={() => handleToggleComplete(index)}>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
