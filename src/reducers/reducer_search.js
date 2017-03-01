const initialState = ''

const SearchReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'SET_SEARCH_KEY':
      return action.payload
    case 'RESET_SEARCH_KEY':
      return ''
    default:
      return state
  }
}

export default SearchReducer
