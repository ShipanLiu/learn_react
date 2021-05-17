import React, {useReducer} from 'react'

const initialState = {count: 0}
export const myContext = React.createContext()

export function reducer(state, action) {
  switch (action.type) {
    case "reset":
      // return initialState
      return {count: 0}
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
    default:
      return state
  }
}

/*
 reducer是真正的函数， 里面的 action.type 就是被dispatch 利用了。

 * ContextProvider
 * 1) 对 myContext 进行了封装。实质上还是提供 context 的功能。
 * 2) 把 state 和 dispatch 提供给所有的 props.children
 * 理解为：给 children 注入了 类似redux reducer 的机制。其实就是
 * 通过 dispatch 一个 action 返回一个新的 state
 *
 * useReducer
 *
 * <myContext.Provider,value={{.....}}>....</myContext.Provider,value>  写下之后， 一定会有  const { state, dispatch } = useContext(myContext);
 * 来接受分享的数据。
 */


export function Contextprovider(props) {
   const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <myContext.Provider value={{state, dispatch}}>
      {/* 我先空下来 */}
      {props.children}
    </myContext.Provider>
  )
}
