import React, { Component } from "react";

class Profile extends Component {
     render() {
        const { handleChange, state: { sobreVoce } } = this.props;

        return (
            <fieldset>
                <legend>Perfil</legend>
                <label>
                    Sobre você:
                    <textarea
                        name="sobreVoce"
                        value={sobreVoce}
                        onChange={handleChange}
                        required
                    />
                    <span className="error-message">{ sobreVoce.length > 500 ? 'Máximo de caracteres: 500' : '' }</span>
                </label>

                <label>
                    Foto de perfil:
                    <input type="file" />
                    </label>
            </fieldset>
        );
    }
}

export default Profile;
