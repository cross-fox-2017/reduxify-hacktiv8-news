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

export default (state = [], action) => {
  switch (action.type) {
    case 'FILTER_NEWS':
        // if (action.keyword){
        //   let cut = new RegExp(`${action.keyword}`, 'i')
        //   return (
        //     state.filter((item) => cut.test(item.title))
        //   )
        // }
        // return data
        getData(action.keyword, (gogo)=>{
          return state.concat(gogo)
        })
        break;
    default:
      return state
  }
}
let getData = (data, cb) => {
  let uri = encodeURI(data)
  fetch(`https://hn.algolia.com/api/v1/search?query=${uri}`)
    .then(response => response.json())
    .then(json => cb(json.hits))
}
