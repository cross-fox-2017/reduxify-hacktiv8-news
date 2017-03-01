export const typeSearch = (keyword) => {
  return {
    type: 'FILTER_NEWS',
    keyword
  }
}

export const fetchData = (data) => {
  return {
    type: 'FETCH_DATA',
    data
  }
}
