import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DynamicImport from './DynamicImport';

const GetCharacter = (props) => (
  <DynamicImport load={() => import('./GetCharacters')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

const Character = (props) => (
  <DynamicImport load={() => import('./Character')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={GetCharacter}/>
            <Route exact path='/character' component={Character}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
