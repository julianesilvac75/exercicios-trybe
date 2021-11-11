import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, labelText, type, inputName, maxLength, stateValue, onChange, onBlur, isInputRequired, isEmailInvalid } = this.props;

    return (
      <label
        htmlFor={ id }
        className="input-area"
      >
        { labelText }
        <input
          type={ type }
          id={ id }
          name={ inputName }
          maxLength={ maxLength }
          value={ stateValue }
          onChange={ onChange }
          onBlur={ onBlur }
          required={ isInputRequired }
        />
        {stateValue.length === parseInt(maxLength) && <span className="warning">Limite de caracteres: {maxLength}</span>}
        {inputName === 'emailInput' && (isEmailInvalid && <span className="warning">Insira um e-mail válido</span>)}
      </label>
    );
  }
}

export default Input;
