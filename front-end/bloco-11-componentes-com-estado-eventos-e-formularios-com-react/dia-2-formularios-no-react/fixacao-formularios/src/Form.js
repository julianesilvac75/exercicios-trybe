import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        nome: '',
        idade: '',
        estado: '',
        sobreVoce: '',
        concordo: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]: value
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
            onChange={this.handleChange}
            required
          />  
        </label>

        <label>
          Idade:
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Estado:
          <select
            name="estado"
            value={this.state.estado}
            onChange={this.handleChange}
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
            name="sobreVoce"
            value={this.state.sobreVoce}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
            <input
              type="checkbox"
              name="concordo"
              onChange={this.handleChange}
            />
            Você concorda?
        </label>

      </form>
      )
    }
}

export default Form;
