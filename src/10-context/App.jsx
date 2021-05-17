/*
  想要实现  A和D进行通信
*/



import React, { Component } from 'react'
import {Provider, testContext, Consumer} from "./testContext"
// Consumer专门为了 function 和 class组件， testContext 是为了class组件

class ChildA extends Component {
  static contextType = testContext
  render() {
    // console.log(this);
    return(
      <div>
        this is ChildA(class):{this.context}
      </div>
    )
  }
}


class ChildB extends Component {
  render() {
    return(
      <div>
        <ChildC></ChildC>
      </div>
    )
  }
}

const ChildC = function() {

  //函数组件没有this， 所以不能用{this.context}， 也不能定义static 变量
  return(
    <Consumer>
      {
        (value) => {
          return (
            <div>this is ChildD(function):{value}</div>
          )
        }
      }
    </Consumer>
  )
}


const ChildD = function() {
  return(
    <div>this is ChildD</div>
  )
}


export default class App extends Component {
  render() {
    return (
      // 这样里面都会使用value, 如何使用呢？ 请看上面
      <Provider value="hello">
        <ChildA/>
        <ChildB/>
      </Provider>
    )
  }
}
