import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import { screen } from '@testing-library/react';

const renderWithRedux = (
  component,
  { INITIAL_STATE,
    store = createStore(combineReducers({ clickReducer}), INITIAL_STATE) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store
  }
};

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App/>);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { INITIAL_STATE: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});