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
    type: 'SET_PEOPLES',
    payload: peoples
  }
}

export const setNews = (news) => {
  return {
    type: 'SET_NEWS',
    payload: news
  }
}

// fetchNews (searchKey) {
//   fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchKey)}`)
//     .then((response) => {
//       return response.json()
//     })
//     .then((resp) => {
//       this.props.setNews(resp.hits)
//     })
// }
