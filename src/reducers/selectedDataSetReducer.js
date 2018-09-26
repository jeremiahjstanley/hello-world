export const selectedDataSet = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_DATASET':
      return action.dataSet;
    default: 
      return state;
  }
};