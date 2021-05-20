import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)
const DashBoard = () => (<div>DashBoard</div>)

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* navs */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashbord">Dashbord</Link></li>
        </ul>
        {/* components */}
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/dashbord" component={DashBoard}></Route>
      </Router>
    )
  }
}
