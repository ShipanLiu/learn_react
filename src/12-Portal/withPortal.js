/*
    这是一个高阶组件， 是函数。。 是with开头， 表示增强。
    高阶组件   一般是一个 函数

    目的： 想要把 <WrappedComponent {...this.props} /> 这个组件放到外面去。

*/

import React, {Component} from 'react'
import {createPortal} from 'react-dom'

function withPortal(WrappedComponent) {
  return class extends Component {
    render() {
      return createPortal(
        <WrappedComponent {...this.props} />,
        // 直接挂到Body上面, 不再通过 App 在 root 的div 里面了。
        document.querySelector('body')
      )
    }
  }

}

export default withPortal