const data = [
  {title: 'React', url: 'https://facebook.github.io/react/'},
  {title: 'Redux', url: 'https://github.io/reactjs/redux/'},
  {title: 'Alex', url: 'http://www.alexanderhendrawan.link'},
  {title: 'Radit', url: 'http://www.raditarya.com'},
  {title: 'Qblol', url: 'http://qblol.com'}
]

export default (state = data, action) => {
  console.log(state);
  switch(action.type) {
    case 'SEARCH_NEWS':
      return action.payload.news.filter(
        berita => berita.title.toLowerCase()
        .match(action.payload.title.toLowerCase())
      )
    default:
      return state
  }
}
