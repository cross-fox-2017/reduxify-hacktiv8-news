export const setSearchKey = (searchKey) => {
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

export const setPeoples = (peoples) => {
  return {
    type: 'SET_DATA',
    payload: peoples
  }
}
