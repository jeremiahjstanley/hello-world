import { fetchInitialLocationSuccess, hasErrored } from '../actions';
import { key } from '../helper/apiKey';

export const setInitialLocation = (location) => {
  // convert full location into ISO ALPHA-3 // 
  return async (dispatch) => {
    try {
      const url = `https://www.quandl.com/api/v3/datasets/WWGI/${location}_VA_EST.json?api_key=${key}`
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const locationData = await response.json();
      // clean data that returns from fetch //
      dispatch(fetchInitialLocationSuccess(locationData));
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}