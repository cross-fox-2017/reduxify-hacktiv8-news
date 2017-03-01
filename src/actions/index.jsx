export const handleChange = (teks) => {
  return {
    type: 'SEARCH_NEWS',
    payload: teks
  }
}

export const showSomething = () => {
  return {
    type: 'SHOW',
    payload: 'yoma'
  }
}
