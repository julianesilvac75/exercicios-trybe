import React, { Component } from 'react';
import Input from './Input';

class PreviousJob extends Component {
  render() {
    const { onMouseEnterPosition, cvSummary, onInputChange, positionInput, jobDescription } = this.props;

    return (
      <fieldset>
        <legend>Último Emprego</legend>

        <label
          htmlFor="cv-summary"
          className="input-area"
        >
          Resumo do currículo
          <textarea
            id="cv-summary"
            name="cvSummary"
            value={ cvSummary }
            maxLength="1000"
            onChange={ onInputChange }
          />
          { cvSummary.length === 1000 && <span className="warning">Limite de caracteres: 1000</span>}
        </label>

        <label
          htmlFor="position-input"
          className="input-area"
        >
          Cargo
          <textarea
            id="position-input"
            name="positionInput"
            value={ positionInput }
            maxLength="40"
            onChange={ onInputChange }
            onMouseEnter={ onMouseEnterPosition }
          />
          {positionInput.length === 40 && <span className="warning">Limite de caracteres: 40</span>}
        </label>

        <Input
          id="job-description"
          labelText="Descrição do Cargo"
          type="text"
          inputName="jobDescription"
          maxLength="500"
          stateValue={ jobDescription }
          onChange={ onInputChange }
        />
      </fieldset>
    )
  }
}

export default PreviousJob;
