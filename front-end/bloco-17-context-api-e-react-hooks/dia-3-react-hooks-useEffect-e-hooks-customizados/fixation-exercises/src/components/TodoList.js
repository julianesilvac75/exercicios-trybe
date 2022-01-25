import React, { useState } from 'react';
import useArray from '../hooks/useArray';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [setTask, taskList] = useArray();

  return <div>
    <h1>TODO LIST</h1>
    <input
      onChange={ ({target: {value}}) => setTodo(value) }
      placeholder="Digite a tarefa"
      type="text"
      value={ todo }
    />
    <button
      onClick={ () => {
          setTask(todo);
          setTodo('');
        } }
      type="button"
    >
      Adicionar
    </button>
    <ul>
      {taskList.map((task, index) => <li key={index}>{task}</li>)}
    </ul>
  </div>;
}

export default TodoList;
