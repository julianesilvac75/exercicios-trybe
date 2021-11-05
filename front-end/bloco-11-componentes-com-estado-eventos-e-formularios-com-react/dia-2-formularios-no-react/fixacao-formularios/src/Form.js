import React, { Component } from "react";
import './Form.css'
import PersonalData from "./PersonalData";
import Profile from "./Profile";

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
