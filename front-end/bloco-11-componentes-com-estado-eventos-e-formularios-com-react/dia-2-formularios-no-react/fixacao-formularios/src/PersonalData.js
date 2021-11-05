import React, { Component } from "react";

class PersonalData extends Component {
    render() {
        const { handleChange, state: { nome, idade, estado } } = this.props;

        return (
            <fieldset>
                <legend>Dados pessoais</legend>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={handleChange}
                        required
                    />
                    <span className="error-message">{ nome.length > 120 ? 'Máximo de caracteres: 120' : '' }</span>
                </label>

                <label>
                    Idade:
                    <input
                        type="number"
                        name="idade"
                        value={idade}
                        onChange={handleChange}
                        required
                    />
                    <span className="error-message">{ parseInt(idade) > 120 || parseInt(idade) === 0 ? 'Insira uma idade válida' : '' }</span>
                </label>

                <label>
                    Estado:
                    <select
                        name="estado"
                        value={estado}
                        onChange={handleChange}
                        required
                    >
                        <option value="" defaultValue disabled>-- Escolha um estado --</option>
                        <option>Paraná</option>
                        <option>Rio de Janeiro</option>
                        <option>São Paulo</option>
                        <option>Santa Catarina</option>
                        <option>Pará</option>
                    </select>
                </label>
            </fieldset>
        );
    }
}

export default PersonalData