/**
 * 知识点：
 *   - Foo 类组件 没有使用箭头函数。重新生成了多个函数。
 *   - Foo1 类组件中用 bind 绑定this，只有一个函数
 *   - Foo2 函数组件反复生成了多个 handleClick
 *   - Foo3 函数组件用 useCallback 避免了重复生成 handleClick
 *
 *   - 通过 useCallback 避免 Parent 重新渲染。优化了性能。
 */

import React, {Component, useCallback, useState} from 'react'
import {Button} from 'antd'

/**
 * 知识点：
 *   - Foo 类组件 没有使用箭头函数。重新生成了多个函数。
 *   - Foo1 类组件中用 bind 绑定this，只有一个函数
 *   - Foo2 函数组件反复生成了多个 handleClick
 *   - Foo3 函数组件用 useCallback 避免了重复生成 handleClick
 *
 *   - 通过 useCallback 避免 Parent 重新渲染。优化了性能。
 */

class Foo1 extends Component {
  handleClick = () => {
    console.log('Foo1 click happend');
  }
  render() {
    return(
      <Button onClick={this.handleClick}>click Foo1</Button>
    )
  }
}

// 函数组件如何避免 重新生成： 取代箭头函数， 定义function + 改变this指向
class Foo2 extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('Foo2 click happend');
  }
  render() {
    return(
      <Button onClick={() => this.handleClick()}>click Foo2</Button>
    )
  }
}

/*
Assuming <Button> is implemented as a PureComponent,
the first way will cause <Button> to re-render every time <Foo> re-renders because a new function is created in every render() call.
In the second way, the handleClick method is only created once in <Foo>'s constructor and reused across renders.
If we translate both approaches to functional components using hooks, these are the equivalents (sort of):
*/

// 下面是用function组件重复

function Foo3() {

  const handleClick = () => {
    console.log('Foo3 click happend');
  }

  return(
    <Button onClick={handleClick}>click Foo3</Button>
  )
}

//函数组件如何避免 重新生成：useCallback
function Foo4() {
  const [num, setNum] = useState(0)
  const memorizedHandleClick = useCallback(
    () => {
      console.log(num);
    },
    [num],
  )
  return(
    <div>
    <Button onClick={memorizedHandleClick}>click Foo4</Button>
    <Button onClick={() => {setNum(num + 1)}}>改变Foo4</Button>
    </div>
  )
}

// React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。
// 组件仅在它的 props 发生改变的时候进行重新渲染
// 这里创建一个Parent组件

const Parent = React.memo(({a, b}) => {
  console.log("Parent 渲染了");
  return (
    <div>
      a: {a}
      b: {b}
    </div>
  )
})

const App1 = (props) => {
  const [a, setA] = React.useState(0)
  const [b, setB] = React.useState(0)

  // const memoHandClick = useCallback(() => {
  //   console.log("click");
  // }, [])

   // 这个时候，  点击change b 按钮也会导致parent 重新挂载， 因为看 119 zeile
  function memoHandClick() {
    console.log('click');
  }
  return (
    <div>
      {console.log("App 渲染")}
      {/* 第二个按钮不会改变Parent里面， 因为根本就没有传进去 */}
      < Parent a={a} c={memoHandClick}/>
      <Button onClick={() => setA(a + 1)}>change a</Button>
      <Button onClick={() => setB(b + 1)}>change b</Button>
      <Button onClick={memoHandClick}>click</Button>
    </div>
  )

}













export {Foo1, Foo2, Foo3, Foo4}
export default App1