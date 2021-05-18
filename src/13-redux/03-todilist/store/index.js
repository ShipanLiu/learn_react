import {createStore, applyMiddleware} from 'redux'

import reducer from './reducer'

/*
  redux 引入中间件
  yarn add redux-thunk
*/

import thunk from "redux-thunk"

// thunk中间件
// 中间件一旦加上， dispatch就会被中间件拦截下来。redux本身只支持 plain action，假如传进来的action是一个fun，
// 就直接调用。 中间件， 最后也需要提交给扁平action
const middleware = applyMiddleware(thunk)

// createStore 挂载中间件， 做一个拦截。
export default createStore(reducer, middleware)