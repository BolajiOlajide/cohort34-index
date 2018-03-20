import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GetCharacter from './GetCharacters';
import Character from './Character';

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
