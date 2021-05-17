import React, { Component } from 'react'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <div>
        <span>{store.getState().count}</span>
        <button onClick={() => {store.dispatch({type: 'increment'})}}>+</button>
        <button onClick={() => {store.dispatch({type: 'decrement'})}}>-</button>
      </div>
    )
  }
}

/*
  不要忘记subscribe（）， 来调用render， 从而更新状态， 在index.js里面做文章。
*/
