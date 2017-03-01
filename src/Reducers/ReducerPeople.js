// export default (state = [], action) => {
//   switch (action.type) {
//     case 'LIST_PEOPLE':
//         return action
//       break;
//     default:
//       return state
//   }
// }

export default () => {
    return [
    {
      name: 'React',
      id: 0
    },
    {
      name: 'Redux',
      id: 1
    }
  ]
}
