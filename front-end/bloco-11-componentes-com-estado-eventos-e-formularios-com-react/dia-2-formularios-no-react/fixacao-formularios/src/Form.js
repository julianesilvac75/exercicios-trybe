import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleAboutYouChange = this.handleAboutYouChange.bind(this);

    this.state = {
        nome: '',
        idade: '',
        estado: '',
        sobreVoce: ''
    }
  }

  handleNameChange(event) {
    this.setState({
        nome: event.target.value
    })
  }
  
  handleAgeChange(event) {
    this.setState({
        idade: event.target.value
    })
  }

  handleStateChange(event) {
    this.setState({
        estado: event.target.value
    })
  }

  handleAboutYouChange(event) {
    this.setState({
        sobreVoce: event.target.value
    })
  }

  render() {
    return (
      <form>

        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handleNameChange}
            required
          />  
        </label>

        <label>
          Idade:
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleAgeChange}
            required
          />
        </label>

        <label>
          Estado:
          <select
            name="estado"
            value={this.state.estado}
            onChange={this.handleStateChange}
            required
          >
            <option value="" selected disabled>-- Escolha um estado --</option>
            <option>Paraná</option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
            <option>Santa Catarina</option>
            <option>Pará</option>
          </select>
        </label>

        <label>
          Sobre você:
          <textarea
            name="sobre-voce"
            value={this.state.sobreVoce}
            onChange={this.handleAboutYouChange}
            required
          />
        </label>

      </form>
      )
    }
}

export default Form;
