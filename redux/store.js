import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers';

import { logger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
  moviesReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

