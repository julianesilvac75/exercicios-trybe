import React, { Component } from "react";
import './Form.css'
import PersonalData from "./PersonalData";
import Profile from "./Profile";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);

    this.state = {
        nome: '',
        idade: '',
        estado: '',
        sobreVoce: '',
        concordo: false,
        formularioComErros: false
    }
  }

  // Referência: Gabaritos do course -  https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/eventos-e-formularios-no-react/solutions/306d9a98-87b4-445b-9256-482909f5e918/conteudo/a675c67e-b553-4390-9904-82f6ed07ab20?use_case=calendar

  handleErrors() {
      const { nome, idade, sobreVoce } = this.state;

      const errors = [
        (nome.length > 120),
        (parseInt(idade) === 0 || parseInt(idade) > 120),
        (sobreVoce.length > 500)
      ]

      const errorCheck = errors.some((error) => error)

      this.setState({
        formularioComErros: errorCheck
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]: value,
      }, () => { this.handleErrors(); });
  }
  

  render() {
    return (
        <form>

            <PersonalData handleChange={this.handleChange} state={this.state} />

            <Profile handleChange={this.handleChange} state={this.state} />

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
