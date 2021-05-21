
/*
useEffect(effect)   告诉 React 在渲染后要做些什么。
类似与：componentDidMount，componentDidUpdate
useEffect的作用原理：当下面的return 渲染完毕之后， useEffect里面的函数就会执行。

React（代码内部）将记住传递的函数(我们将把它称为 “effect” )，
然后在执行DOM更新后调用它。在本案例中，我们设置了文档标题，
但我们也可以执行数据获取或调用其他命令式API。

它与 React 类中的 ，
和 componentWillUnmount 有相同的功能，但是统一为单个 API

useEffect（）里面的第二个参数没有：componentDidMount + componentDidUpdate，
useEffect（）里面的第二个参数空数组： componentDidMount 只执行一次。

// GitHubUsers 一共渲染了两次： 第一次： return 渲染， 第二次： useEffect 渲染

*/


import React, {useState, useEffect} from "react"
import {Button} from "antd"
import Modal from "antd/lib/modal/Modal"


export function Example() {
  const [count, setCount] = useState(0)
  // 没有第二个参数的时候， 每次渲染都会执行
  useEffect(() => {
    document.title = `you clicked ${count} times`
    console.log("click")
  })
  // 第二个参数是： 只有第二个参数发生变化的时候， 才会触发前面的（函数）， 这里是一个【】， 永远也不会变化
  useEffect(() => {
    console.log("我只输出一次")
  }, [])
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">click me</button>&nbsp;&nbsp;
      <button onClick={() => setCount(count)} className="btn btn-primary">不变</button>
    </div>
  )
}

// 下面的生命周期的写法 跟上面的功能一样
export class Example1 extends React.Component {
  state = {count: 1}

  // 首次挂载
  componentDidMount() {
    document.title = `you clicked ${this.state.count} times (First time)`
  }

  // 每次更新
  componentDidUpdate() {
    document.title = `you clicked ${this.state.count} times (update)`
  }
  render() {
    return (
      <div>
        <p>you clicked {this.state.count} times</p>
        <Button onClick={() => this.setState({count: this.state.count + 2})}> click me </Button>
      </div>
    )
  }
}

// 获取 github users案例
// 一共渲染了两次： 第一次： return 渲染， 第二次： useEffect 渲染

export function GitHubUsers() {
  const [users, setUsers] = useState([])
  async function postData(url) {
    const response = await fetch(url, {
      method: 'GET'
    })
    return response.json()
  }
  // 因为[] 始终保持不变，因此 useEffect 只运行一次。
  useEffect(() => {
    console.log('我第二次渲染');
    return postData('https://api.github.com/users').then(data => setUsers(data))
  }, [])
  return (
    <div className="section">
      {
        users.map(userObj =>
          (
            <div key={userObj.id} className="card">
              <h5>{userObj.login}</h5>
            </div>
          )
        )
      }

    </div>
  )
}