import { combineReducers } from 'redux';
import { location } from './locationReducer';
import { locationData } from './locationDataReducer';
import { dataBase } from './dataBaseReducer';
import { dataSet } from './dataSetReducer';
import { hasErrored } from './errorReducer';
import { madeSearch } from './madeSearchReducer';

export const rootReducer = combineReducers({
  location,
  dataBase,
  dataSet,
  locationData,
  hasErrored,
  madeSearch
});
