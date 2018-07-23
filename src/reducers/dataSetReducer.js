 export const dataSet = (state = {}, action) => {
  switch(action.type) {
    case 'SET_DATASET':
      return action.dataSet;
    default: 
      return state;
  }
}