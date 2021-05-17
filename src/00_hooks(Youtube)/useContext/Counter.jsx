import React, {useContext} from "react"
// in reducer, the myContext provides {state, dispatch}
import {myContext} from "./reducer"
import {Button} from "antd"

//来接受myContext分享的数据。
export default function Counter() {
  const {state, dispatch} = useContext(myContext)
  return(
    <div>
      Counter计数：：{state.count}
      {/* 下面的dispatch是通过 myContext 里面的数据引入的 */}
      <Button onClick={() => dispatch({type: "reset"})}>reset</Button>
      <Button onClick={() => dispatch({type: "increment"})}>+</Button>
      <Button onClick={() => dispatch({type: "decrement"})}>-</Button>
    </div>
  )
}

/**
 * Counter 函数组件。
 * 利用 useContext 获得了 state 和 dispatch函数
 * 然后三个按钮执行三个 dipatch 因此 state.count 的三种变化。
 *
 * 这里可以明显看到 “状态相关” 逻辑的复用和本组件无关。本组件只是引入 hooks
 * 然后渲染即可。
 *
 *
 * useContext() 参数是一个通过 const myContext = React.createContext(); 创建的。
 * 理解：useContext 则必须 myContext 已经建立，且Provider 已经赋值。见reducer.js
 */
