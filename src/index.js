import React, { Component } from 'react';
import { render } from 'react-dom';

const Main = () => {
  return (
    <div>
      <h1>My app is working!</h1>
    </div>
  );
};

render(<Main />, document.getElementById('app'));
