import React, { Component } from 'react';
import { render } from 'react-dom';
import GetCharacter from './components/GetCharacters';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({});

const Main = () => {
  return (
    <Provider store={store}>
      <GetCharacter />
    </Provider>
  );
};

render(<Main />, document.getElementById('app'));
