export const newsListsReducer = () => {
  return [
    {
      id: 1,
      title: 'Google',
      url: 'http://google.com'
    },
    {
      id: 2,
      title: 'Facebook',
      url: 'http://facebook.com'
    },
    {
      id: 3,
      title: 'Twitter',
      url: 'http://twitter.com'
    }
  ]
}

export const searchKeywordReducer = (state = '' , action) => {
  switch (action.type) {
    case 'SEARCH_NEWS':
      return action.payload
      break
    default:
      return state
  }
}
