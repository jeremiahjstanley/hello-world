import { fetchAdditionalDataSuccess } from '../actions';
import { dataCleaner } from '../helper/dataCleaner';
import { fetchEstimates } from './fetchEstimates';
import { fetchNumberOfSources } from './fetchNumberOfSources'; 
import { fetchPercentileRank } from './fetchPercentileRank';
import { fetchStandardError } from './fetchStandardError';

export const fetchMultipleGovernanceIndicators = (locations, dataSets, dataBase) => {
  return async (dispatch) => {

    const unresolvedMultipleGovernanceIndicators = dataSets.map(async dataSet => {
      const dataSetCode = dataSet.dataset_code;

      const unresolvedGovernanceIndicators = locations.map(async location => {
        const alpha3 = location.alpha_3;
        const estimates = await dispatch(fetchEstimates(alpha3, dataSetCode, dataBase));
        const numberOfSources = await dispatch(fetchNumberOfSources(alpha3, dataSetCode, dataBase)); 
        const percentileRank = await dispatch(fetchPercentileRank(alpha3, dataSetCode, dataBase));
        const standardError = await dispatch(fetchStandardError(alpha3, dataSetCode, dataBase));
        const cleanEstimates = dataCleaner(estimates);
        const cleanNumberOfSources = dataCleaner(numberOfSources);
        const cleanPercentileRank = dataCleaner(percentileRank);
        const cleanStandardError = dataCleaner(standardError);
        return {cleanEstimates, cleanNumberOfSources, cleanPercentileRank, cleanStandardError};
      });

      const governanceIndicators = await Promise.all(unresolvedGovernanceIndicators);
      return governanceIndicators;

    });

    const multipleGovernanceIndicators = await Promise.all(unresolvedMultipleGovernanceIndicators)
    const convertedMultipleGovernanceIndicators = multipleGovernanceIndicators.map(indicator => {
      return Object.assign({}, ...indicator)
    })

    await dispatch(fetchAdditionalDataSuccess(convertedMultipleGovernanceIndicators));
  };
};