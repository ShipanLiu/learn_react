import React, { Component } from 'react'
import {Route, Link} from "react-router-dom"

class Child extends Component {

  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div>hello</div>
    )
  }
}


export default class UrlParameters extends Component {
  render() {
    return (
      <div>
        {/* <Link to="/aaa">aaa</Link>&nbsp;&nbsp;
        <Link to="/bbb">bbb</Link>&nbsp;&nbsp;
        <Link to="/ccc">ccc</Link> */}
        <Route path="/:id" component={Child}></Route>
      </div>
    )
  }
}
