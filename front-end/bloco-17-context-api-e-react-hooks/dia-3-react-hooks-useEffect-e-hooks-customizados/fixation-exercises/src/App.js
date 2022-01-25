import { useState } from 'react';
import './App.css';
import Button from './Button';
import TodoList from './components/TodoList';
import RandomNumber from './RandomNumber';

function App() {
  const [unmount, setUnmount] = useState(true);
  
 

  return (
    <div className="App">
      {unmount && <RandomNumber/>}
      <Button unmount={{unmount, setUnmount}} />
      <TodoList/>
    </div>
  );
}

export default App;
