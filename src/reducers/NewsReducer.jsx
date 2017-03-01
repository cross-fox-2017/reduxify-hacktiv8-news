export const NewsList = () => {
  return [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
    }, {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1
    }
  ]
}

export const SearchNews = (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_NEWS':
      return action.payload
    default:
      return state
  }
}
