export const searchNews = (news) => {
  return {
    type: 'SEARCHED_NEWS',
    payload: news
  }
}
