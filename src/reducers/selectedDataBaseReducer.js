export const selectedDataBase = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_DATABASE':
      return action.dataBase;
    default: 
      return state;
  }
};