import React, { Component } from 'react';
import './App.css';

function handleClick() {
  console.log('Você clicou!');
}

class App extends Component {
  render() {
    return(
      <button onClick={handleClick}>Clique aqui!</button>
    );
  }
}

export default App;
