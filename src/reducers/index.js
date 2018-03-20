import { combineReducers } from 'redux';

import getCharacter from './character.reducer';

const rootReducer = combineReducers({
  character: getCharacter
});

export default rootReducer;
