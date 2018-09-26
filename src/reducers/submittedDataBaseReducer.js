export const submittedDataBase = (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_DATABASE':
      return action.dataBase;
    default: 
      return state;
  }
};