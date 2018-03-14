import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from '../actions/types';

const initialState = {
  characters: [],
  message: ''
};


const getCharacters = (state = initialState, action) => {
  switch (action.types) {
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: action.characters
      }
    };
    case GET_CHARACTERS_ERROR: {
      return {
        ...state,
        message: action.message
      }
    };
    default:
      return state;
  }
};


export default getCharacters;