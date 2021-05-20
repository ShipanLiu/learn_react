import React, { Component } from 'react'
import {Route, Link, Switch} from "react-router-dom"

const Home = () => <div>Home</div>
const Rendering = () => <div>Rendering</div>
const Components = () => <div>Components</div>
const PropsState = () => <div>PropsState</div>

const Topics = (props) => {
  // console.log(props);
  // 解构出来
  let {url} = props.match
  return(
    <>
      <h1>Topics</h1>
      <hr />
      <ul>
        <li><Link to={`${url}rendering`}>Rendering</Link></li>
        <li><Link to={`${url}components`}>Components</Link></li>
        <li><Link to={`${url}propsstate`}>PropsState</Link></li>
      </ul>
      <Route path={`${url}/rendering`}component={Rendering}></Route>
      <Route path={`${url}/components`} component={Components}></Route>
      <Route path={`${url}/propsstate`} component={PropsState}></Route>
    </>
  )
}

export default class Nesting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/*默认勾选 */}
          <li><Link to="/topics/rendering">Topics</Link></li>
        </ul>
        <Switch>
          <Route path="/topics" component={Topics}></Route>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </div>
    )
  }
}

/*
    switch排他性路由， 比如 /  （没有exact的情况下）home匹配上了，topics就没有机会了,
    把最底层的路由写在最下面。
*/
