import { hasErrored } from '../actions';
import { key } from '../helper/apiKey';

export const fetchPercentileRank = (isoAlpha3, dataSet, dataBase) => {
  return async (dispatch) => {
    try {
      const url = `https://www.quandl.com/api/v3/datasets/${dataBase}/${isoAlpha3}_${dataSet}_PER_RNK.json?api_key=${key}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      dispatch(hasErrored(true));
    }
  };
};