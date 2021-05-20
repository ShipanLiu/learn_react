import React, { Component } from 'react'
import {Route, NavLink, Redirect} from 'react-router-dom'


const Home = (props) => (<div>Home的props.match.path：{props.match.path}</div>)


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


export default class RedirectDemo extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home">Home</NavLink>&nbsp;
        <NavLink to="/about">About</NavLink>&nbsp;

        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </div>

    )
  }
}
