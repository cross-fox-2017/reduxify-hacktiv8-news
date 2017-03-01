const data = [
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

export const newsListsReducer = () => {
  return data
}

export const searchKeywordReducer = (state = data , action) => {

  switch (action.type) {
    case 'SEARCH_NEWS':
      let searchNewsLists = action.payload.news.filter(item => new RegExp(action.payload.text, 'i').test(item.title))
      console.log(searchNewsLists)

      return searchNewsLists

      break
    default:
      return state
  }
}
