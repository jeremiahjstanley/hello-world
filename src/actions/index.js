export const hasErrored = (status) => ({
  type: 'HAS_ERRORED',
  hasErrored: status
});

export const fetchInitialLocationSuccess = (initialLocation) => ({
  type: 'FETCH_INITIAL_LOCATION_SUCCESS',
  initialLocation
});