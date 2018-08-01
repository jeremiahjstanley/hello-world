export const dataSet = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATASET':
      return action.dataSet;
    case 'CLEAR_DATASET':
      return {};
    default: 
      return state;
  }
};