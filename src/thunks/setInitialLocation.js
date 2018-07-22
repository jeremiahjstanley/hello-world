import { fetchInitialLocationSuccess} from '../actions';
import { fetchEstimates } from './fetchEstimates';
import { fetchNumberOfSources } from './fetchNumberOfSources'; 
import { fetchPercentileRank } from './fetchPercentileRank';
import { fetchStandardError } from './fetchStandardError';

export const setInitialLocation = (location, dataSet, dataBase) => {
  // convert full location into ISO ALPHA-3 // 
  const isoAlpha3 = location;
  return async (dispatch) => {
    const estimates = await dispatch(fetchEstimates(isoAlpha3, dataSet, dataBase));
    const numberOfSources = await dispatch(fetchNumberOfSources(isoAlpha3, dataSet, dataBase));
    const percentileRank = await dispatch(fetchPercentileRank(isoAlpha3, dataSet, dataBase));
    const standardError = await dispatch(fetchStandardError(isoAlpha3, dataSet, dataBase));
    const locationData = {estimates, numberOfSources, percentileRank, standardError}
    dispatch(fetchInitialLocationSuccess(locationData));
  }
}