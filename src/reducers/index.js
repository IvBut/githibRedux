import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reposReducer from './reposReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  repos: reposReducer
});

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer,   composeEnhancers);

export default store
