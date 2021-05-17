import React, { Component } from 'react'

import hoc from './hoc'

// 需要 一系列的安装。和修改package

class App extends Component {

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div>
        this is App
      </div>
    )
  }

}

export default hoc(App)

// export default App
