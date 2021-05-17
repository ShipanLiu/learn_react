/*
context在React是底层的东西。 被redux取代， 但是有时候会发挥作用
*/

import React, {Component, createContext} from "react"

const {
  Provider,
  Consumer: CountConsumer
} = createContext()

class CountProvider extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  state = {
    count: 0
  }

  increment(args) {
    this.setState(state => ({
      count: state.count + args
    }))
  }

  decrement(args) {
    this.setState(state => ({
      count: state.count - args
    }))
  }

  render() {
    return (
      <Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        {/* 是为了让被 <CountProvider></CountProvider>包裹地内容显示*/}
        {/* {this.props.children}属于增强组件的方法 ， HOC 高阶组件是另外一种方法*/}
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CountProvider,
  CountConsumer
}