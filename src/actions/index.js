export const searchNews = (text, news, keyword) => {
  return {
    type: 'SEARCH_NEWS',
    payload: {
      text: text,
      news: news,
      keyword: keyword
    }
  }
}
