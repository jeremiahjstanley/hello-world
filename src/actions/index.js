export const clearDataSet = () => ({
  type: 'CLEAR_DATASET'
});

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});

export const selectDataBase = (dataBase) => ({
  type: 'SELECT_DATABASE',
  dataBase
});

export const submitDataBase = (dataBase) => ({
  type: 'SUBMIT_DATABASE',
  dataBase
});

export const addDataSet = (dataSet) => ({
  type: 'ADD_DATASET',
  dataSet
});

export const selectDataSet = (dataSet) => ({
  type: 'SELECT_DATASET',
  dataSet
});

export const submitDataSet = (dataSet) => ({
  type: 'SUBMIT_DATASET',
  dataSet
});

export const fetchLocationDataSuccess = (locationData) => ({
  type: 'FETCH_LOCATION_DATA_SUCCESS',
  locationData
});

export const fetchAdditionalDataSuccess = (locationData) => ({
  type: 'FETCH_ADDITIONAL_DATA_SUCCESS',
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


