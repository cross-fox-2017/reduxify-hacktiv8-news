export const handleChangeSearch = (searchKey) => {
  return {
    type: 'SET_SEARCH_KEY',
    payload: searchKey
  }
}

export const resetSearchKey = () => {
  return {
    type: 'RESET_SEARCH_KEY'
  }
}
