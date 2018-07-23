import { fetchLocationDataSuccess } from '../actions';
import { goveranceIndicatorCleaner } from '../helper/dataCleaner'
import { fetchEstimates } from './fetchEstimates';
import { fetchNumberOfSources } from './fetchNumberOfSources'; 
import { fetchPercentileRank } from './fetchPercentileRank';
import { fetchStandardError } from './fetchStandardError';

export const setLocation = (location, dataSet, dataBase) => {  return async (dispatch) => {
    const estimates = await dispatch(fetchEstimates(location, dataSet, dataBase));
    const numberOfSources = await dispatch(fetchNumberOfSources(location, dataSet, dataBase));
    const percentileRank = await dispatch(fetchPercentileRank(location, dataSet, dataBase));
    const standardError = await dispatch(fetchStandardError(location, dataSet, dataBase));
    const locationData = goveranceIndicatorCleaner(estimates, numberOfSources, percentileRank, standardError);
    dispatch(fetchLocationDataSuccess(locationData));
  }
}