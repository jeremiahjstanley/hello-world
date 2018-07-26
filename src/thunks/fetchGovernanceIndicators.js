import { fetchLocationDataSuccess } from '../actions';
import { dataCleaner } from '../helper/dataCleaner';
import { fetchEstimates } from './fetchEstimates';
import { fetchNumberOfSources } from './fetchNumberOfSources'; 
import { fetchPercentileRank } from './fetchPercentileRank';
import { fetchStandardError } from './fetchStandardError';

export const fetchGovernanceIndicators = (locations, dataSet, dataBase) => {
    return async (dispatch) => {
        const unresolvedGovernanceIndicators = locations.map(async location => {
            const alpha3 = location.alpha_3
            const estimates = await dispatch(fetchEstimates(alpha3, dataSet, dataBase));
            const numberOfSources = await dispatch(fetchNumberOfSources(alpha3, dataSet, dataBase)); 
            const percentileRank = await dispatch(fetchPercentileRank(alpha3, dataSet, dataBase));
            const standardError = await dispatch(fetchStandardError(alpha3, dataSet, dataBase));
            const cleanEstimates = dataCleaner(estimates);
            const cleanNumberOfSources = dataCleaner(numberOfSources);
            const cleanPercentileRank = dataCleaner(percentileRank);
            const cleanStandardError = dataCleaner(standardError);
            return {cleanEstimates, cleanNumberOfSources, cleanPercentileRank, cleanStandardError};
        });
        const governanceIndicators = await Promise.all(unresolvedGovernanceIndicators)
        await dispatch(fetchLocationDataSuccess(governanceIndicators))     
    };
};