// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

// O que o componente App é em relação a Order ?
// Seria o componente "pai", dentro do qual Order é chamado para ser renderizado na tela

export default Order;