let data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    objectID: 1
  }
]

export default (state = data, action) => {
  switch (action.type) {
    case 'FILTER_NEWS':
        let cut = new RegExp(`${action.keyword}`, 'i')
        return (
          state.filter((data) => cut.test(data.title))
        )
      break;
    default:
      return state
  }
}
