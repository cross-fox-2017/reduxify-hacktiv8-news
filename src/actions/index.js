export const searchNews = (keyword, news) => {
  return {
    type: 'FIND_NEWS',
    payload: {
      keyword: keyword,
      news: news
    }
  }
}
