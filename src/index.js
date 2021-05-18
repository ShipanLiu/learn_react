import React from "react"
import ReactDOM from "react-dom"
// import App from "./10-context/App"
// import App from "./10-context/counter/App"
// import App from "./11-HOC/App"
// import App from "./12-Portal/App"
// import App from "./13-redux/selfmade-redux/App"
// import App from "./13-redux/02-redux/redux+react/App"
// import store from "./13-redux/02-redux/redux+react/store"

//下面是todolist
import App from "./13-redux/03-todilist/TodoList"
import {Provider} from "react-redux"




//下面为了即使刷新， redux简单粗暴方法， 但是不可取，在实际开发中
// function render() {
// ReactDOM.render(<App msg="world" />,document.getElementById("root"))
// }

// render()
// store.subscribe(render)
import store from "./13-redux/03-todilist/store/index"     //store里面有一个subscribe（）， 是更新用的。

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById("root")
)
