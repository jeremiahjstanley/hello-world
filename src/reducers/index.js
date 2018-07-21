import { combineReducers } from 'redux';
import { initialLocation, hasErrored } from './locationReducer'

export const rootReducer = combineReducers({
  initialLocation,
  hasErrored
})
