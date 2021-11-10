import React, { Component } from 'react';
import User from './components/User';

class App extends Component {
  constructor() {
    super();

    this.handleNextButton = this.handleNextButton.bind(this);

    this.state = {
      loading: true,
      user: [],
    }
  }

  fetchUser() {
    this.setState({
      loading: true,
    }, () => {
      fetch('https://api.randomuser.me/')
        .then((response) => response.json())
        .then((data) => this.setState({
          loading: false,
          user: data.results[0],
        }));
    })

  }

  handleNextButton() {
    this.fetchUser();
  }

  componentDidMount() {
    console.log('component did mount');
    this.fetchUser();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update');
    const { loading, user } = nextState;
    if (loading) {
      return loading;
    }

    return user.dob.age < 50;
  }

  render() {
    console.log('render');
    const { loading, user } = this.state;

    return (
      <div>
        { loading ? 'Loading...' : <User user={ user } handleNextButton={ this.handleNextButton } /> }
        <br />
        <button onClick={this.handleNextButton }>Next</button>
      </div>
    );
  }
}

export default App;
