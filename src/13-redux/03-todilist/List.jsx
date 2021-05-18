/*
    here : yarn add react-redux: conbines react with react， 用在 index.js里面
    react和redux 就差一个组件的同步

    需要在这个组件上读取store

*/


import React, { Component } from 'react'
import {connect} from 'react-redux'  // 把 状态 和 操作状态的方法 连接到组件上
import {removeAction, loaddataAction} from './store/actionCreater'

// 映射 state 到当前的Prop上，（）里面的state， 就是真实的state,我们不用关心。list: state.list 被绑到了props上面
const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove(index) {
      dispatch(removeAction(index))
    },

    loadData() {
      dispatch(loaddataAction())
    }
  }
}

class List extends Component {

  componentDidMount() {

     this.props.loadData(0)

  }

  handleClick = (index) => {
    return () => {
      this.props.remove(index)
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.list.map((value, index) => {
            return(
              <li key={value.positionId}>
              {value.positionName}
              {/* <button onClick={this.props.remove(index)}>remove</button> */}
              <button onClick={this.handleClick(index)}>remove</button>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

//connect方法第一次调用的返回值是一个高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(List)
