import React, {useReducer} from "react"

const initState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
    case 'minus':
      return {
        count: state.count -1
      }
      // 上面的两个case， 就不提起state这个词
    default:
      return state
  }
}


export default function UseReducer() {
  let [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
    </div>
  )
}