export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});

export const setDataSet = (dataSet) => ({
  type: 'SET_DATASET',
  dataSet
});

export const clearDataSet = () => ({
  type: 'CLEAR_DATASET',
});

export const setDataBase = (dataBase) => ({
  type: 'SET_DATABASE',
  dataBase
});

export const fetchLocationDataSuccess = (locationData) => ({
  type: 'FETCH_LOCATION_DATA_SUCCESS',
  locationData
});

export const hasErrored = (status) => ({
  type: 'HAS_ERRORED',
  hasErrored: status
});

export const madeSearch = (status) => ({
  type: 'MADE_SEARCH',
  madeSearch: status
});


