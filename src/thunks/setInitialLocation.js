import { fetchInitialLocationSuccess} from '../actions';
import { goveranceIndicatorCleaner } from '../helper/dataCleaner'
import { fetchEstimates } from './fetchEstimates';
import { fetchNumberOfSources } from './fetchNumberOfSources'; 
import { fetchPercentileRank } from './fetchPercentileRank';
import { fetchStandardError } from './fetchStandardError';
import { countries } from '../helper/countryMetrics';

export const setInitialLocation = (location, dataSet, dataBase) => {
  const isoAlpha3 = countries.find(country => location === country.name).alpha_3;
  return async (dispatch) => {
    const estimates = await dispatch(fetchEstimates(isoAlpha3, dataSet, dataBase));
    const numberOfSources = await dispatch(fetchNumberOfSources(isoAlpha3, dataSet, dataBase));
    const percentileRank = await dispatch(fetchPercentileRank(isoAlpha3, dataSet, dataBase));
    const standardError = await dispatch(fetchStandardError(isoAlpha3, dataSet, dataBase));
    const locationData = goveranceIndicatorCleaner(estimates, numberOfSources, percentileRank, standardError)
    dispatch(fetchInitialLocationSuccess(locationData));
  }
}