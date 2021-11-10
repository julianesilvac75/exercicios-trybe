import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user: { picture, name, dob, email } } = this.props;
    const fullName = `${name.first} ${name.last}`;

    return (
      <div>
          <div>
            <img src={ picture.large } alt={ fullName }/>
            <p>{ fullName }</p>
            <p>{ dob.age } years old</p>
            <p>{ email }</p>
          </div>
      </div>
    );
  }
}

export default User;