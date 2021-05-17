import React, {useCallback} from "react"
import {Button} from "antd"

// * 知识点：
//  *   - 概要理解 useCallback 的意义。
//  *   - 每次修改 num, memoizedCallback 才发生了变化，否则不变。避免了重新生成。

let fn = null

function TestUseCallback({num, name}) {
  // 只要 TestUseCallback 一挂载， 这个函数就会重新生成
  // const cb = () => console.log(33)
  // 当memoizedCallback 被执行的时候，  useCallback里面的第一个参数也会被执行。
  // [num]不变的时候，useCallback里面的函数不会更新。第一次成成之后， 就不再重新生成
  const memoizedCallback = useCallback(
    () => {
      console.log('abc');
      return num1
    },
    [num]

  )
  // 结果第一次是false， 后来是true， 点击完按钮， num改变， 又一次false
  console.log('callback 是否相同：', Object.is(fn,memoizedCallback), name);
  console.log('num > ', num, name);
  fn = memoizedCallback;
  return (
    <div>
      <p>TestUseCallback</p>
    </div>
  )



}

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

export default class App1 extends React.Component {
  state = {
    num: num1,
    count: 0,
    name: '123'
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count+1})
    }, 10000)
  }

  handleChangeNum = () => {
    this.setState({
      name:'jiba',
      num: num2
    })
  }

  render() {
    const {num} = this.state
    return (
      <div>
        <h1>Hello</h1>
      <Button onClick={this.handleChangeNum}>修改传入的num值</Button>
      <TestUseCallback num={num} name={this.state.name} />
      </div>
    )
  }
}