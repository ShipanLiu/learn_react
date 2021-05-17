import React, {useContext} from "react"
import ReactDom from 'react-dom'
import {Button} from 'antd'

/*
通过 useContext 不需要用 context.consumer 就可以获得 context 传递的数据。
*/

const myContext = React.createContext()

function Com1() {
  const {count, setCount} = React.useContext(myContext)

  return (
    <div>
      {count} <br />
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
    </div>
  )
}

export default function UseContext1() {
  // 起始默认值是8
  const [count, setCount] = React.useState(8)
  return (
    /* value 里面是指想要共享的内容 */
    /* {count, setCount}之所以写成这样， 是因为， Com1里面的 const {count, setCount}  定义方式 */
    <myContext.Provider value={{count, setCount}}>
      <Com1/>
    </myContext.Provider>
  )
}
