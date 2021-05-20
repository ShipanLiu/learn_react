import React from 'react'
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


const Home = () => {
  let {state:{id}} = useLocation()
  return(
    <div>home--params: {id}</div>
  )
}

const About = () => {
  let { id } = useParams()
  return(
    <div>about--params: {id}</div>
  )
}

const Search = () => {
  const location = useLocation()
  const {search} = location
  // console.log(location);   search: "?id=14"
  let query = new URLSearchParams(search)

  return(
    <div>search--params:{query.get('id')}</div>
  )
}

const Params = () => {
  return(
    <>
      <ul>
        <li>
          <NavLink to={{pathname: '/home' ,state: {id: "jiba"}}}>home</NavLink>
        </li>
        <li>
          <NavLink to="/about/12">about</NavLink>
        </li>
         <li>
          <NavLink to="/search?id=14">search</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about/:id">
          <About></About>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Redirect exact from="/" to="/home"></Redirect>
      </Switch>

    </>
  )
}

export default Params


/*
  传参方法： 1. /：id 动态路由    let { id } = useParams()
            2. 通过state， to={{}}（在useLocation里面）  let {state:{id}} = useLocation()
            3. through search参数（在useLocation里面） const {serach} = uselocation(),  并且通过UrlSearchParams（）进行解析。


*/