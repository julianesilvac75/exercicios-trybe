const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
        return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, R. ${order['address'].street}, Nº: ${order['address'].number}, AP: ${order['address'].apartment}`
  
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    const pizzas = Object.keys(order.order.pizza);

    return `Olá ${order.name}, o total do seu pedido de ${pizzas.toString()} e ${order.order.drinks.coke.type} é R$${order.payment.total},00`
  
  }
  
  console.log(orderModifier(order));

  order.name = 'Juliane';

  console.log(orderModifier(order));

  order.payment.total = 50;

  console.log(orderModifier(order));