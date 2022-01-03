const Redux = require('redux');

// const store = Redux.createStore();

// const reducer = (state) => {
//   return state;
// };

// const store = Redux.createStore(reducer);

// const reducer = (state = { login: false, email: '' }) => {
//   return state;
// }

// const store = Redux.createStore(reducer);

// const ESTADO_INICIAL = {
//   login: false,
//   email: '',
// };

// const reducer = (state = ESTADO_INICIAL) => {
//   return state;
// };

// const store = Redux.createStore(reducer);

// console.log(store.getState());

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No Switch, sempre precisamos ter um caso default
      return state;
  }
};

const store = Redux.createStore(reducer);

console.log(store.getState());


store.dispatch(fazerLogin('alguem@email.com'));

console.log(store.getState());
