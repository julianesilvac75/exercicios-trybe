import React, { Component } from 'react';
import './App.css';
import CvSummary from './components/CvSummary';
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
    this.onEmailInputBlur = this.onEmailInputBlur.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onCleanButtonClick = this.onCleanButtonClick.bind(this);

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
      isEmailInvalid: false,
      didMouseEnter: false,
      showSaveButtonWarning: false,
      isFormValid: '',
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

  onEmailInputBlur({ target }) {
    const { value } = target;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.setState({
      isEmailInvalid: !regex.test(value),
    })
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { nameInput,
      emailInput,
      cpfInput,
      addressInput,
      cityInput,
      stateSelect,
      houseType,
      cvSummary,
      positionInput,
      jobDescription,
      isEmailInvalid } = this.state;

    const params = [
      (nameInput.length > 0),
      (emailInput.length > 0),
      (cpfInput.length > 0),
      (addressInput.length > 0),
      (cityInput.length > 0),
      (stateSelect.length > 0),
      (houseType.length > 0),
      (cvSummary.length > 0),
      (positionInput.length > 0),
      (jobDescription.length > 0),
      (isEmailInvalid === false)
    ];

    const validation = params.every((param) => param);

    validation ? this.setState({ isFormValid: validation, showSaveButtonWarning: false }) : this.setState({ showSaveButtonWarning: true });
  }

  onCleanButtonClick() {
    this.setState({
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
      isEmailInvalid: false,
      didMouseEnter: false,
      showSaveButtonWarning: false,
      isFormValid: '',
    })
  }

  render() {
    const { nameInput, emailInput, cpfInput, addressInput, cityInput, stateSelect, cvSummary, positionInput, jobDescription, houseType, isFormValid, isEmailInvalid, showSaveButtonWarning } = this.state;

    return (
      <>
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
            onEmailInputBlur={ this.onEmailInputBlur }
            isEmailInvalid={ isEmailInvalid }
          />

          <PreviousJob
            onMouseEnterPosition={ this.onMouseEnterPosition }
            cvSummary={ cvSummary }
            onInputChange={ this.onInputChange }
            positionInput={ positionInput }
            jobDescription={ jobDescription }
          />

          {showSaveButtonWarning && <p className="warning">Preencha todos os campos!</p>}
          <button
            onClick={ this.onSaveButtonClick }
            type="submit"
          >
            Salvar currículo
          </button>
          <button
            onClick={ this.onCleanButtonClick }
            type="button"
          >
            Limpar
          </button>
        </form>

        <section>

          {isFormValid && <CvSummary
            fullName={ nameInput }
            cpf={ cpfInput }
            email={ emailInput }
            address={ addressInput }
            city={ cityInput }
            state={ stateSelect }
            houseType={ houseType }
            cvSummary={ cvSummary }
            position={ positionInput }
            jobDescription={ jobDescription}
          />}
          
        </section>
      </>
    );
  }
}

export default App;
