const initialState = ''

export const SearchReducer = (state = initialState , action) => {
  if (action.type === 'SEARCHED_NEWS') {
    return action.payload
  }
  return state
}
