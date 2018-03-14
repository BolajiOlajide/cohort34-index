import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';

// TODO: Import reducers here
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

export default configureStore;