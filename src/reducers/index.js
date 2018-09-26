import { combineReducers } from 'redux';
import { location } from './locationReducer';
import { locationData } from './locationDataReducer';
import { selectedDataBase } from './selectedDataBaseReducer';
import { selectedDataSet } from './selectedDataSetReducer';
import { submittedDataBase } from './submittedDataBaseReducer';
import { submittedDataSet } from './submittedDataSetReducer';
import { hasErrored } from './errorReducer';
import { madeSearch } from './madeSearchReducer';

export const rootReducer = combineReducers({
  location,
  selectedDataBase,
  selectedDataSet,
  submittedDataBase,
  submittedDataSet,
  locationData,
  hasErrored,
  madeSearch
});
