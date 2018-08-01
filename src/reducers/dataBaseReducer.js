export const dataBase = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATABASE':
      return action.dataBase;
    default: 
      return state;
  }
};