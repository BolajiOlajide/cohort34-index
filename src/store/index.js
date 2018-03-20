import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';

// TODO: Import reducers here
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

export default configureStore;
