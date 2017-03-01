export const Baru = (state = '', action) => {
  switch(action.type) {
    case 'SHOW':
      return action.payload
    default:
      return state
  }
}
