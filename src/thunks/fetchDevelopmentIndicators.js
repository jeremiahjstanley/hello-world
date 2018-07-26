import { fetchLocationDataSuccess } from '../actions';
import { dataCleaner } from '../helper/dataCleaner';
import { hasErrored } from '../actions';
import { key } from '../helper/apiKey';

export const fetchDevelopmentIndicators = (locations, dataSet, dataBase) => {

    return async (dispatch) => {
        const unresolvedDevelopmentIndicators = locations.map(async location => {
            const isoAlpha3 = location.alpha_3
            try {
              const url = `https://www.quandl.com/api/v3/datasets/${dataBase}/${isoAlpha3}_${dataSet}.json?api_key=${key}`;
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
        
        await dispatch(fetchLocationDataSuccess(cleanDevelopmentIndicators))   
    };
};