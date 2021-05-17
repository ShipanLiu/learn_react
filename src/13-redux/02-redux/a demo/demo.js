/*
  此文件仅仅展示react的核心
*/

const {createStore} = require('redux')
const reducer = require('./reducer')


const store = createStore(reducer)

// console.log(store);



// redux的核心
store.subscribe(() => {
  console.log("被调用了",store.getState().count);
})

store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})









//持续输出
//  setInterval(() => {
//    // count 被增加了一次
//    store.dispatch({
//     type: 'increment'
//   })

//   console.log(store.getState().count);
//  },1000)
