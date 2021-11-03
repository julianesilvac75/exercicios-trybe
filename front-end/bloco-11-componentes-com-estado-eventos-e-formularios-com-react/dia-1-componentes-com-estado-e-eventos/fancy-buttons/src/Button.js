import React, { Component } from "react";

class Button extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            buttonClicks: 0,
        }
    }
    
    handleClick() {
        this.setState((previousState, _props) => ({
            buttonClicks: previousState.buttonClicks + 1
        }));

        const { consoleText } = this.props;

        console.log(consoleText);
    }

    render() {
        const { buttonText } = this.props;

        return(
            <button onClick={this.handleClick}>{buttonText} ({this.state.buttonClicks})</button>
        );
    }
}

export default Button;
