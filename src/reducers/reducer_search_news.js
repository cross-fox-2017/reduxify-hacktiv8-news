export default (state = '', action) => {
  // debugger
  switch (action.type) {
    case 'FIND_NEWS':
      const news = action.payload.news
    let result = news.filter(item => item.title === action.payload.keyword )

    if (result.length < 1) {
      result = [
        {  title: 'React',
        url: 'https://facebook.github.io/react/'},
        {title: 'Redux',
        url: 'https://github.com/reactjs/redux'}
      ]
    }

    return result
    default:
      return [
        {  title: 'React',
        url: 'https://facebook.github.io/react/'},
        {title: 'Redux',
        url: 'https://github.com/reactjs/redux'}
      ]
  }
}
