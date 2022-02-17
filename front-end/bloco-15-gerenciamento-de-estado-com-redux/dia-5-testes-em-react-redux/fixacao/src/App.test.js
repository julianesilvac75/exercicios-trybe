import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  test('exercício de fixação 1: testa se um clique funciona', () => {
    renderWithRedux(<App/>);
    
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clique aqui/i }));
  
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('exercício de fixação 2: testa se um clique funciona com um valor inicial', () => {
    renderWithRedux(
      <App />,
      { INITIAL_STATE: { clickReducer: { counter: 10}}}
    );
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.queryByText('0')).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clique aqui/i }));

    expect(screen.queryByText('10')).not.toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});