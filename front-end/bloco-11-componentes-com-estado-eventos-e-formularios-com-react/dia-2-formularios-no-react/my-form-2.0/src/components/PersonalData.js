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
      onCityInputBlur,
      onEmailInputBlur,
      isEmailInvalid } = this.props;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>

           <Input
          id="name-input"
          labelText="Nome"
          type="text"
          inputName="nameInput"
          maxLength="40"
          stateValue={ nameInput }
          onChange={ onNameInputChange }
        />

        <Input
          id="email-input"
          labelText="E-mail"
          type="text"
          inputName="emailInput"
          maxLength="50"
          stateValue={ emailInput }
          onChange={ onInputChange }
          onBlur={ onEmailInputBlur }
          isEmailInvalid={ isEmailInvalid }
        />

        <Input
          id="cpf-input"
          labelText="CPF"
          type="text"
          inputName="cpfInput"
          maxLength="11"
          stateValue={ cpfInput }
          onChange={ onInputChange }
        />

        <Input
          id="address-input"
          labelText="Endereço"
          type="text"
          inputName="addressInput"
          maxLength="200"
          stateValue={ addressInput }
          onChange={ onAddressInputChange }
        />

        <Input
          id="city-input"
          labelText="Cidade"
          type="text"
          inputName="cityInput"
          maxLength="28"
          stateValue={ cityInput }
          onChange={ onInputChange }
          onBlur={ onCityInputBlur }
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
          >
            <option value="" defaultValue>-- Escolha um estado --</option>
            {ESTADOS_BRASILEIROS.map((state) => <option key={state}>{state}</option>)}
          </select>
          {!stateSelect && <span className="warning">Escolha um estado</span>}
        </label>

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
