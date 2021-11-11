import React, { Component } from 'react';
import ESTADOS_BRASILEIROS from '../data';
import Input from './Input';

class PersonalData extends Component {
  render() {
    const { nameInput,
      emailInput,
      cpfInput,
      addressInput,
      cityInput,
      stateSelect,
      onInputChange,
      onNameInputChange,
      onAddressInputChange,
      onCityInputBlur } = this.props;

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
          onChange={ onNameInputChange }
          isInputRequired={ true }
        />

        {/* Obrigatório, fazer validação de email */}
        <Input
          id="email-input"
          labelText="E-mail"
          type="text"
          inputName="emailInput"
          maxLength="50"
          stateValue={ emailInput }
          onChange={ onInputChange }
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
          onChange={ onInputChange }
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
          onChange={ onAddressInputChange }
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
          onChange={ onInputChange }
          onBlur={ onCityInputBlur }
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
            onChange={ onInputChange }
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
            onChange={ onInputChange }
          />
          Casa
        </label>
        <label htmlFor="apartment-input">
          <input
            name="houseType"
            value="Apartamento"
            type="radio"
            id="apartment-input"
            onChange={ onInputChange }/>
          Apartamento
        </label>

      </fieldset>
        )
    }
}

export default PersonalData;
