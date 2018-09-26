import { fetchAdditionalDataSuccess, hasErrored  } from '../actions';
import { dataCleaner } from '../helper/dataCleaner';
import { key } from '../helper/apiKey';

export const fetchMultipleDevelopmentIndicators = (locations, dataSets, dataBase) => {

  return async (dispatch) => {

    const unresolvedMultipleDevelopmentIndicators = dataSets.map(async dataSet => {
      const dataSetCode = dataSet.dataset_code;

      const unresolvedDevelopmentIndicators = locations.map(async location => {
        const isoAlpha3 = location.alpha_3;
        try {
          const url = `https://www.quandl.com/api/v3/datasets/${dataBase}/${isoAlpha3}_${dataSetCode}.json?api_key=${key}`;
          console.log(url)
          const response = await fetch(url);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return await response.json();
        } catch (error) {
          dispatch(hasErrored(true));
        }
      });

      const developmentIndicators = await Promise.all(unresolvedDevelopmentIndicators);
      const cleanDevelopmentIndicators = developmentIndicators.map(indicator => {
        return dataCleaner(indicator);
      });

      return cleanDevelopmentIndicators
    });

    const multipleDevelopmentIndicators = await Promise.all(unresolvedMultipleDevelopmentIndicators);
    const convertedMultipleDevelomentIndicators = multipleDevelopmentIndicators.reduce((convertedArray, indicator) => {
      convertedArray = [...convertedArray, ...indicator]
      return convertedArray
    },[]);
    await dispatch(fetchAdditionalDataSuccess(convertedMultipleDevelomentIndicators));  
  }
};
