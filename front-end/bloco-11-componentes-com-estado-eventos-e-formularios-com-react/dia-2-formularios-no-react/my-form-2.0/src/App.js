import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
const ESTADOS_BRASILEIROS = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

class App extends Component {
  constructor() {
    super();

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddressInputChange = this.onAddressInputChange.bind(this);
    this.onCityInputBlur = this.onCityInputBlur.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);

    this.state ={
      nameInput: '',
      emailInput: '',
      cpfInput: '',
      addressInput: '',
      cityInput: '',
      stateSelect: '',
      houseType: '',
    }
  }

  onNameInputChange({ target }) {
    const { value } = target;
    ;

    this.setState({
      nameInput: value.toUpperCase(),
    });
  }

  onInputChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    })
  }

  onAddressInputChange({ target }) {
    const { value } = target;
    const regex = /[^A-zÀ-ú0-9\s]/gi;

    this.setState({
      addressInput: value.replace(regex, '')
    })
  }

  onCityInputBlur({ target }) {
    const { value } = target;
    const regex = /^[0-9]+/;

    this.setState({
      cityInput: regex.test(value) ? '' : value,
    })
  }

  onSelectChange({ target }) {
    console.log(target.name);
  }

  render() {
    const { nameInput, emailInput, cpfInput, addressInput, cityInput, stateSelect } = this.state;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>

        {/* Obrigatório */}
        <Input
          id="name-input"
          labelText="Nome"
          type="text"
          inputName="nameInput"
          maxLength="40"
          stateValue={ nameInput }
          onChange={ this.onNameInputChange }
          isInputRequired={ true }
        />

        {/* Obrigatório */}
        <Input
          id="email-input"
          labelText="E-mail"
          type="text"
          inputName="emailInput"
          maxLength="50"
          stateValue={ emailInput }
          onChange={ this.onInputChange }
          isInputRequired={ true }
        />

        {/* Obrigatório */}
        <Input
          id="cpf-input"
          labelText="CPF"
          type="text"
          inputName="cpfInput"
          maxLength="11"
          stateValue={ cpfInput }
          onChange={ this.onInputChange }
          isInputRequired={ true }
        />

        {/* Obrigatório */}
        <Input
          id="address-input"
          labelText="Endereço"
          type="text"
          inputName="addressInput"
          maxLength="200"
          stateValue={ addressInput }
          onChange={ this.onAddressInputChange }
          isInputRequired={ true }
        />

        {/* Obrigatório */}
        <Input
          id="city-input"
          labelText="Cidade"
          type="text"
          inputName="cityInput"
          maxLength="28"
          stateValue={ cityInput }
          onChange={ this.onInputChange }
          onBlur={ this.onCityInputBlur }
          isInputRequired={ true }
        />

        <label
          htmlFor="state-select"
          className="input-area"
        >
          Estado
          <select
            id="state-select"
            value={ stateSelect }
            name="stateSelect"
            onChange={ this.onInputChange }
            required
          >
            <option value="" defaultValue>-- Escolha um estado --</option>
            {ESTADOS_BRASILEIROS.map((state) => <option key={state}>{state}</option>)}
          </select>
          {!stateSelect && <span className="warning">Escolha um estado</span>}
        </label>

        {/* Obrigatório */}
        <label htmlFor="house-input">
          <input
            name="houseType"
            value="Casa"
            type="radio"
            id="house-input"
            onChange={ this.onInputChange }
          />
          Casa
        </label>
        <label htmlFor="apartment-input">
          <input
            name="houseType"
            value="Apartamento"
            type="radio"
            id="apartment-input"
            onChange={ this.onInputChange }/>
          Apartamento
        </label>

      </fieldset>
    );
  }
}

export default App;
