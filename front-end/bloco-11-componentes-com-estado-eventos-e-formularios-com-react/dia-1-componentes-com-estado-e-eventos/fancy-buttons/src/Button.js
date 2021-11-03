import React, { Component } from "react";

class Button extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            firstButtonClicks: 0,
            secondButtonClicks: 0,
            thirdButtonClicks: 0
        }
    }
    
    handleClick() {
        const { consoleText } = this.props;
        console.log(consoleText);
    }

    render() {
        const { buttonText } = this.props;

        return(
            <button onClick={this.handleClick}>{buttonText}</button>
        );
    }
}

export default Button;
