// Parte 1

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  const newKey = 'lastName';
  const lastName =  'Ferreira';

const addKey = (object, key, value) => {
    object[key] = value;
    return object;
}

console.log(addKey(customer, newKey, lastName));