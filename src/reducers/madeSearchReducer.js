export const madeSearch = (state = false, action) => {
  switch (action.type) {
    case 'MADE_SEARCH':
      return action.madeSearch;
    default: 
      return state;
  }
};