/*
  知识点： 路由还可以用一个数组来包括。
*/


import React from "react"

import {
  Route,
  Switch,
  NavLink,
  useHistory,
  useLocation
} from "react-router-dom"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <h2>Home</h2>
  },
  {
    id: 2,
    path: '/bubblegum',
    sidebar: () => <div>bubblegum</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    id: 3,
    path: '/shoelaces',
    sidebar: () => <div>shoelaces</div>,
    main: () => <h2>Shoelaces</h2>
  },

]

export default function SideBar() {
  return(
    <div>
      <div className="sidebar">
        <ul>
          {
            routes.map((routeObj) => {
              return(
                <li
                 key={routeObj.path}
                 >
                  <NavLink to={routeObj.path}>{routeObj.path === '/' ? 'home' : routeObj.path.slice(1)}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <Switch>
          {
            routes.map(({path, exact, sidebar}) => {
              return(
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  // 这里 children 是路由的一种方式， children + switch = component/render
                  children={sidebar}
                >


                 </Route>
              )
            })
          }
        </Switch>
      </div>
      <div className="main">
        <Switch>
          {
            routes.map(({path, exact, main}) => {
              return(
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  // 这里 children 是路由的一种方式， children + switch = component/render
                  children={main}
                >

                </Route>
              )
            })
          }
        </Switch>
      </div>
    </div>
  )
}