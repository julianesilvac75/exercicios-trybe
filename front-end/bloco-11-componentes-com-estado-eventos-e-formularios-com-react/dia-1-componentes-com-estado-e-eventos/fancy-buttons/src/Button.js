import React, { Component } from "react";

class Button extends Component {
    render() {
        const { buttonText, consoleText } = this.props;

        function handleClick() {
            console.log(consoleText);
        }
        return(
            <button onClick={handleClick}>{buttonText}</button>
        );
    }
}

export default Button;
