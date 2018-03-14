import { combineReducers } from 'redux';

import getCharacter from './getCharacters';

const rootReducer = combineReducers({
  character: getCharacter
});

export default rootReducer;
