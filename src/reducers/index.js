import { combineReducers } from 'redux';
import { initialLocation } from './locationReducer';
import { hasErrored } from './errorReducer'

export const rootReducer = combineReducers({
  initialLocation,
  hasErrored
})
