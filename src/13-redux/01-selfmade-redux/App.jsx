/*
这是一个自己手写 的redux， 模拟redux 的原理

*/

import React, { Component } from 'react'
import store from './store2'

export default class App extends Component {

componentDidMount() {
  //render 一旦挂载完毕， 就显示出来
  store.dispatch()
}

  render() {
    return (
      <div>
        <span id="count"></span>
        {/* 注意， onClick里面函数带参数的时候， 要注意 立即调用的 bug ， 要渲染完毕才run*/}
        <button onClick={store.dispatch.bind(this, {type: 'increment'})}>+</button>
        <button onClick={() => store.dispatch({type: 'decrement'})}>-</button>
      </div>
    )
  }
}
