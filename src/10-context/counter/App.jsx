
/*
    通过Count里面， CountProvider 这个类地 共享功能 来达到状态管理地目的。
    Child 和 ChildHood 都可以读取共享value了。 牛逼
*/


import React, { Component } from 'react'
import Child from "./Child"
import {CountConsumer, CountProvider} from "./Count"
export default class App extends Component {
  render() {
    return (
      <CountProvider>
        <Child></Child>
      </CountProvider>
    )
  }
}
