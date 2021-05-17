import React, { Component } from "react"
import "antd/dist/antd.css"
// import {Example1,Toggle} from "./hooks/1-useState"
// import {Example, Example1, GitHubUsers} from "./hooks/2-useEffect"
// import Counter from "./hooks/3-useReducer"
// import UseContext1 from "./hooks/useContext/demo1"
// import Demo2 from "./hooks/useContext/demo2"
// import App1 from "./hooks/useCallback/useCallback"
import App1, {Foo1, Foo2, Foo3,Foo4} from "./hooks/useCallback/useCallback2"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <div style={{backgroundColor: "pink"}}>
          <p>下面是useState </p>
          <hr/>
          <hr/>
          <p style={{color: "blue"}}>Example1:</p>
          <Example1 />
          <hr/>
          <hr/>
          <p style={{color: "blue"}}>Toggle:</p>
          <Toggle />
        </div>
        <hr /> */}


        {/* 下面是useEffect */}
        {/* <p>下面是useEffect </p>
        <div style={{backgroundColor: "pink"}}>
          <Example /> */}
          <hr />
          {/* <Example1 /> */}
          <hr />
          {/* <GitHubUsers/ >
        </div> */}


        {/* <p>下面是useReducer </p>
        <div style={{backgroundColor: "pink"}}>
          <Counter initialCount={{count: 1}} />
        </div> */}


        {/* <p>下面是useContext </p>
        <div style={{backgroundColor: "pink"}}>
          <UseContext1 />
          <Demo2 />
        </div> */}

         <p>下面是useCallback </p>
        <div style={{backgroundColor: "pink"}}>
        {/* <App1 /> */}
        <Foo1 />
        <Foo2 />
        <Foo3 />
        <Foo4 />
        <App1/>
        </div>
      </div>
    )
  }
}
