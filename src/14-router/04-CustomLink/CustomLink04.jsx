/*
  目标是： 点击谁： 加上<
*/

import React, { Component } from 'react'
import { Route, Switch, NavLink, withRouter, useLocation} from "react-router-dom"
import "./style.css"

const Home = (props) => (<div>Home的props.match.path：{props.match.path}</div>)
const DashBoard = () => (<div>DashBoard</div>)
const Profile = (props) => <div>Profile</div>

class Jiba extends Component {

  // componentDidMount() {
  //   console.log(this.props);
  // }
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


// 下面进行：自己定义组件: 目的是为了方便， 不再写很多NavLink, 这个组件可以导出去。
// 用withRouter 把下面抱起来。  为了拿到我当前的路径， 我的地址到底在那里  http://localhost:3000/profile， 比如这个。
const MyNavLink = withRouter(
  class MyNavLink extends Component {
  state = {
    navList: [
      {
      id: '001',
      name: "home"
    },
    {
      id: '002',
      name: "about"
    },
    {
      id: '003',
      name: "jiba"
    },
    {
      id: '004',
      name: "profile"
    },
    {
      id: '005',
      name: "dashbord"
    },
    ]
  }

  handleClick = (path) => {
    console.log(path);
    let history = this.props.history
    history.push(`/${path}`)
  }


  render() {
    // 假如没有withRouter， 输出为空
    // console.log(this.props.location.pathname);
    // const {pathname} = useLocation(),钩子可以直接将pathname提取处理啊， 但是只能在fun组件里面使用。
    let pathname = this.props.location.pathname

    return (

      // {
      //   this.state.navList.map((navObj) => <li key={navObj.id}>{navObj.name}</li>)  这样会报错没有this, 因为你要return一个节点。
      //
      // }
      <>
      {
        this.state.navList.map((navObj) => {
          // 匹配到谁， 谁加上<
          let { id, name:path} = navObj
          return(
            <li
              key={id}
              onClick={() => this.handleClick(path)}
            >
              {/* 把第一个字母换成大写 */}
              {pathname === `/${path}` ? '>' : ''}{path.substring(0,1).toUpperCase()+path.substring(1)}
            </li>
          )
        })
      }
      </>
    )
  }
}
)




class CustomLink extends Component {
  render() {
    return (
      <div>
        {/* navs */}
        <ul>
          {/* myNavLink, 无法传输props， 不像下面的几个 ， 只能借助withRouter装饰器
            因为MyNavLink没有通过路由的渲染。
          */}
          {/* <MyNavLink to="/">Home</MyNavLink> */}
          <MyNavLink></MyNavLink>
          {/* <li><NavLink activeClassName="seleted" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="seleted" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="seleted" to="/dashbord">Dashbord</NavLink></li>
          <li><NavLink activeClassName="seleted" to="/jiba">Jiba</NavLink></li>
          <li><NavLink activeClassName="seleted" to="/profile">Profile</NavLink></li> */}
        </ul>
          {/* components, 三种渲染方法 ， children（），render（） 后面只能跟函数。 要是class组件， 用一个箭头函数*/}
        {/* 因为render后面是一个函数，所以不会直接调用， 需要将props传进去， 这样类组件就会由props可用 */}
        <Route exact path="/home" component={Home} ></Route>
        <Route path="/about" render={(props) => <About {...props}/>}></Route>
        <Route path="/dashbord" render={DashBoard}></Route>
        {/* 没有switch的话， 不管路径皮不匹配， children每次都会挂载 */}
        <Route path="/jiba" children={(props) => <Jiba {...props} />}></Route>
        {/* 第四种方法 */}
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        {/* 第五种方法， history.push() */}

      </div>
    )
  }
}

export default CustomLink
/*
children 虽然每次都加载， 但是只要不是加载 Jiba， path就是  /， 而不是 /jiba,  而且match is null
加了switch， children就完蛋。

withRouter 的使用： 不用@装饰器的方法， 而用包裹的方法：
包裹一个 fun组件：  const Home = withRouter((props) => <div>Home</div>), 但这个包装没什么意义， 因为Home本身就是由Props的。

Hooks: 由4个钩子：
*/
