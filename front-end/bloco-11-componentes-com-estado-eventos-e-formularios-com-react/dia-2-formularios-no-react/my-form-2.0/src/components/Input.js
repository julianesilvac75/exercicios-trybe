import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, labelText, type, inputName, maxLength, stateValue, onChange, onBlur, isInputRequired } = this.props;

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
        {stateValue.length === parseInt(maxLength) && <span className="warning">Máximo de caracteres: {maxLength}</span>}
      </label>
    );
  }
}

export default Input;
