
export const hasErrored = (state = false, action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}

export const initialLocation = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_INITIAL_LOCATION_SUCCESS':
      return action.initialLocation;
    default: 
      return state;
  }
}