import React, { Component } from "react";

class Button extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            buttonClicks: 0,
        }
    }
    
    handleClick(event) {
        this.setState((previousState, _props) => ({
            buttonClicks: previousState.buttonClicks + 1
        }));

        const { consoleText } = this.props;
        const backgroundColor = window.getComputedStyle(event.target).getPropertyValue('background-color');

        console.log(consoleText);
        console.log(backgroundColor);
    }

    render() {
        const { buttonText } = this.props;
        const { buttonClicks } = this.state;

        return(
            <button style={ { 
                background: buttonClicks % 2 === 0 ? 'green' : 'white'}}
                onClick={this.handleClick}
            >
                {buttonText} ({buttonClicks})
            </button>
        );
    }
}

export default Button;
