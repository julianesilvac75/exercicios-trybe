import React, { Component } from 'react';
import './App.css';
import PersonalData from './components/PersonalData';
import PreviousJob from './components/PreviousJob';

class App extends Component {
  constructor() {
    super();

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddressInputChange = this.onAddressInputChange.bind(this);
    this.onCityInputBlur = this.onCityInputBlur.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onMouseEnterPosition = this.onMouseEnterPosition.bind(this);

    this.state ={
      nameInput: '',
      emailInput: '',
      cpfInput: '',
      addressInput: '',
      cityInput: '',
      stateSelect: '',
      houseType: '',
      cvSummary: '',
      positionInput: '',
      jobDescription: '',
      didMouseEnter: false,
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

  onMouseEnterPosition() {
    const { didMouseEnter } = this.state;

    if (!didMouseEnter) {
      this.setState({
        didMouseEnter: true,
      })

      return alert('Preencha com cuidado essa informação.')
    }
  }

  render() {
    const { nameInput, emailInput, cpfInput, addressInput, cityInput, stateSelect, cvSummary, positionInput, jobDescription } = this.state;

    return (
      <form>
        <PersonalData
          nameInput={ nameInput }
          emailInput={ emailInput }
          cpfInput={ cpfInput}
          addressInput={ addressInput }
          cityInput={ cityInput }
          stateSelect={ stateSelect }
          onInputChange={ this.onInputChange }
          onNameInputChange={ this.onNameInputChange }
          onAddressInputChange={ this.onAddressInputChange }
          onCityInputBlur={ this.onCityInputBlur }
        />

        <PreviousJob
          onMouseEnterPosition={ this.onMouseEnterPosition }
          cvSummary={ cvSummary }
          onInputChange={ this.onInputChange }
          positionInput={ positionInput }
          jobDescription={ jobDescription }
        />
      </form>
    );
  }
}

export default App;
