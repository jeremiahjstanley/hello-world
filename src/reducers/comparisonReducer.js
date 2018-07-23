export const countriesToCompare = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMPARISON_LOCATION':
      return [...state, action.location]
    default: 
      return state;
  }
}