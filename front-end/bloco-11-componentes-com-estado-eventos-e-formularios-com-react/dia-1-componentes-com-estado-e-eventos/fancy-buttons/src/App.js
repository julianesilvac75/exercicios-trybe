import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return(
      <>
        <Button buttonText="Clique aqui!" consoleText="Você clicou no primeiro botão" />
        <Button buttonText="Não! Clique aqui!" consoleText="Você clicou no segundo botão" />
        <Button buttonText="Espere! Clique aqui!" consoleText="Você clicou no terceiro botão" />
      </>
    );
  }
}

export default App;
