import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import directory from './directory';

const rootReducer = combineReducers({
  routing,
  directory
});

export default rootReducer;
