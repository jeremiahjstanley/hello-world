export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});

export const setDataBase= (dataBase) => ({
  type: 'SET_DATABASE',
  dataBase
});

export const setDataSet= (dataSet) => ({
  type: 'SET_DATASET',
  dataSet
});

export const fetchLocationDataSuccess = (locationData) => ({
  type: 'FETCH_LOCATION_DATA_SUCCESS',
  locationData
});

export const hasErrored = (status) => ({
  type: 'HAS_ERRORED',
  hasErrored: status
});


