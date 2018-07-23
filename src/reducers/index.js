import { combineReducers } from 'redux';
import { location } from './locationReducer';
import { countriesToCompare } from './comparisonReducer';
import { locationData } from './locationDataReducer';
import { dataBase } from './dataBaseReducer';
import { dataSet } from './dataSetReducer';
import { hasErrored } from './errorReducer'

export const rootReducer = combineReducers({
  location,
  countriesToCompare,
  dataBase,
  dataSet,
  locationData,
  hasErrored
})
