import React, {useContext} from "react"
import {myContext} from "./reducer"
import {Button} from "antd"

export default function Countertest() {
  const {state, dispatch} = useContext(myContext)
  return (
    <div>
      Countertest计数： {state.count}
      <Button onClick={() => dispatch({type: "reset"})}>reset</Button>
      <Button onClick={() => dispatch({type: "increment"})}>+</Button>
      <Button onClick={() => dispatch({type: "decrement"})}>-</Button>
    </div>
  )
}