import React, { Component } from "react";
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

const callback = ({ conteudo, bloco, status}, index) => {
    return <li key={index}>
        <p>O conteúdo é: {conteudo}</p>
        <p>Status: {status}</p>
        <p>Bloco: {bloco}</p>
    </li>;
}

class Content extends Component {
    render() {
        const items = conteudos.map(callback);

        return <ul>{items}</ul>
    }
}

export default Content;