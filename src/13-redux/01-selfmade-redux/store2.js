import {changeState} from "./reducer"

let state = {
  count:0
}

// createStore 的作用就是对外暴露方法
const createStore = () => {

  //getState
  const getState = () => state

  //观察者模式， 订阅模式
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)


  //接受reducer, 调用render
  const dispatch = (action) => {
    // console.log(changeState(state, action));
    //changeState会返回新的state
    state = changeState(state,action)
    //让 listener run一下， 发布模式
    listeners.forEach((listener) => listener())
  }

  //return 的是一个对象
  return {
    dispatch,
    getState,
    subscribe
  }
}


const store = createStore()

//操作DOM，原生JS，挂载一下count
const render = () => {
  // document.querySelector('#count').innerHTML = state.count
  document.querySelector('#count').innerHTML = store.getState().count
}


// 调用一下dispatch, 因为 createStore() 返回的就是dispatch



// 把render这个函数订阅一下，dispatch的时候， 把listeners里面所有的函数run一下
store.subscribe(render)

export default store



/*
 问题： 问什么代码需要如此绕？？

  1. 在使用render的时候， 使用了发布订阅模式。


*/
