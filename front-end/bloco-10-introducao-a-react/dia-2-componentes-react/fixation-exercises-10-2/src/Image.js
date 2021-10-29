import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

// Qual o nome do componente declarado acima?
// R: é um componente de classe chamado Image

export default Image;