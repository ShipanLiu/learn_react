/*
  高阶组件 HOC 一个js文件:   何为高阶？ 就是 参数是一个组件。
  在这里会 给 Comp加上新的 props， 同时继承老的 原来的 props。

  但是 装饰器 比这种写法要好。
*/
import React, {Component} from "react"

const hoc = (Comp) => {
  return class extends Component {

    // componentDidMount() {
    //   console.log(this);
    // }

    render() {
      return(
        // {...this.props} 是为了继承原来App固有的属性。
        <Comp title="title" {...this.props}></Comp>
      )
    }
  }
}

export default hoc