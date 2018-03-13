import { USER_LOGIN_SUCCESS } from '../constants';

import initialState from './initialState';

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
  }
};
