export const locationData = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_DATA_SUCCESS':
      return action.locationData;
    case 'FETCH_ADDITIONAL_DATA_SUCCESS':
      return action.locationData;
    default: 
      return state;
  }
};