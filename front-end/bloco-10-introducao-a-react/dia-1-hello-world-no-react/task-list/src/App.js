import './App.css';

const tasks = ['Limpar chão', 'Lavar louça', 'Passear com o cachorro', 'Estudar React', 'Fazer compras'];

const Task = (value) => {
  const items = value.map((item, index) => 
    <li key={index}>
      {item}
    </li>)
  return (
    <>
      {items}
    </>
  )
}

function App() {
  return (
    <ol>
      {Task(tasks)}
    </ol>
  );
}

export default App;
