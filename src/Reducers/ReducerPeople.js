let data =  [
    {
      name: 'LUKE',
      id: 0
    },
    {
      name: 'SKY',
      id: 1
    },
    {
      name: 'Walker',
      id: 2
    }
  ]

export default (state = data, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
        return state.concat(action.data)
    default:
      return state
  }
}
