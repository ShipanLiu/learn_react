/*
  Form组件应该用 Function
*/


import React, { Component } from 'react'
import {connect} from "react-redux"
import {putdataAction, } from "./store/actionCreater"


// 映射 dispatch 到当前的Prop上, 就是把 return后面的内容： 也就是 putData(task)这个函数放到 props上面（通过connect）
const mapDispatchToProps = (dispatch) => {
  return {
    // putData: function() {

    // }
    putData(task) {
      dispatch(putdataAction(task))
    }
  }
}

class Form extends Component {
  state = {
    task: ''
  }


  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      // putData()就是推入新task的
      this.props.putData(this.state.task)
      this.setState({
        task: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input type="text"
         value={this.state.task}
         onChange={this.handleChange}
         onKeyUp={this.handleKeyUp}
         />
      </div>
    )
  }
}

export default connect(null,mapDispatchToProps)(Form)
