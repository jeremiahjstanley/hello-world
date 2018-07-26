import { combineReducers } from 'redux';
import { location } from './locationReducer';
import { locationData } from './locationDataReducer';
import { dataBase } from './dataBaseReducer';
import { dataSet } from './dataSetReducer';
import { changeData } from './changeData'
import { hasErrored } from './errorReducer';

export const rootReducer = combineReducers({
  location,
  dataBase,
  dataSet,
  locationData,
  hasErrored,
  changeData
})
