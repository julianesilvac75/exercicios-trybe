import React, { Component } from 'react';

class CvSummary extends Component {
  render() {
    const { fullName, cpf, email, address, city, state, houseType, cvSummary, position, jobDescription } = this.props;

    return (
      <div>
          <h1>{ fullName }</h1>

          <h2>Dados pessoais</h2>
          <p>CPF: { cpf }</p>    
          <p>E-mail: { email }</p>
          <div>
            Endereço:
            <p>{ address } ({ houseType})</p>
            <p>{ city }, { state }</p>
          </div>

          <h2>Resumo do currículo</h2>
          <p>{ cvSummary }</p>

          <h3>Último emprego</h3>
          <p>Cargo: { position }</p>
          <p>Descrição: { jobDescription }</p>
      </div>
    )
  }
}

export default CvSummary;
