import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({});

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

render(<Main />, document.getElementById('app'));
