import { combineReducers } from 'redux';
import { todos } from './todos-reducers';
import { filters } from './filter-reducers';

export const rootReducer = combineReducers({
  todos,
  filters,
});
