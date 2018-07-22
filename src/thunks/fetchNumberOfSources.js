import { hasErrored } from '../actions';
import { key } from '../helper/apiKey';

export const fetchNumberOfSources = (isoAlpha3, dataSet, dataBase) => {
  return async (dispatch) => {
    try {
      const url = `https://www.quandl.com/api/v3/datasets/${dataBase}/${isoAlpha3}_${dataSet}_NO_SRC.json?api_key=${key}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const locationData = await response.json();
      // clean data that returns from fetch //
      return locationData;
    } catch (error) {
      dispatch(hasErrored(true));
    }
  }
};