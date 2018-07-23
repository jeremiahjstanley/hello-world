export const initialLocation = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_INITIAL_LOCATION_SUCCESS':
      return action.initialLocation;
    default: 
      return state;
  }
}