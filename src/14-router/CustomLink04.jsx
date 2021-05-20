/*
  目标是： 点击谁： 加上<
*/

import React, { Component } from 'react'
import { Route, Switch, NavLink} from "react-router-dom"
import "./style.css"

const Home = (props) => (<div>Home的props.match.path：{props.match.path}</div>)
const DashBoard = () => (<div>DashBoard</div>)

class Jiba extends Component {

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return(
      <div>Jiba</div>
    )
  }
}


class About extends Component {

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    return(
      <div>About</div>
    )
  }
}

export default class CustomLink extends Component {
  render() {
    return (
      <div>
        {/* navs */}
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/dashbord">Dashbord</NavLink></li>
          <li><NavLink to="/jiba">Jiba</NavLink></li>
        </ul>
          {/* components, 三种渲染方法 ， children（），render（） 后面只能跟函数。 要是class组件， 用一个箭头函数*/}
        {/* 因为render后面是一个函数，所以不会直接调用， 需要将props传进去， 这样类组件就会由props可用 */}
        <Route path="/about" render={(props) => <About {...props}/>}></Route>
        <Route path="/dashbord" render={DashBoard}></Route>
        {/* 没有switch的话， 不管路径皮不匹配， children每次都会挂载 */}
        <Route path="/jiba" children={(props) => <Jiba {...props} />}></Route>
        <Route exact path="/" component={Home} ></Route>
      </div>
    )
  }
}

/*
children 虽然每次都加载， 但是只要不是加载 Jiba， path就是  /， 而不是 /jiba
*/
