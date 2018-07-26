export const changeData = (state = false, action) => {
  switch(action.type) {
    case 'CHANGE_DATA':
      return action.changeData
    default:
      return state;
  }
}