// export default (state = [], action) => {
//   switch (action.type) {
//     case 'FILTER_NEWS':
//         return action.keyword
//       break;
//     default:
//       return state
//   }
// }

export default () => {
    return [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      id: 0
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      id: 1
    }
  ]
}
