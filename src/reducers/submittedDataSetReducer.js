export const submittedDataSet = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_DATASET':
      return [action.dataSet];
    case 'CLEAR_DATASET':
      return [];
    case 'ADD_DATASET':
      return [...state, action.dataSet];
    default: 
      return state;
  }
};