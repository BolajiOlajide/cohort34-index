import axios from 'axios';

import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR
} from './types';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';


export const allCharacters = characters => ({
  type: GET_CHARACTERS,
  characters
});

export const allCharactersError = message => ({
  type: GET_CHARACTERS_ERROR,
  message
});


const characterAction = () => (dispatch) => {
  return axios.get(BASE_URL).then((response) => {
    const { results } = response.data;
    dispatch(allCharacters(results));
  }).catch((error) => {
    const { message } = error.response.data;
    dispatch(allCharactersError(message));
  })
}

export default characterAction;
