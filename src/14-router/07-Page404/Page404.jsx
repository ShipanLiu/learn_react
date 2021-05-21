import React from 'react'

import {
  Route,
  Switch,
  Redirect,
  NavLink,
  useParams,
  useLocation
} from 'react-router-dom'

const Home = () => {
  let { state: { id } } = useLocation()
  return (
    <div>home: {id}</div>
  )
}

const About = () => {
  let { id } = useParams()
  return (
    <div>about: {id}</div>
  )
}

const Search = () => {
  let { search } = useLocation()

  let query = new URLSearchParams(search)

  return (
    <div>search: { query.get('id') }</div>
  )
}

const Page404 = () => {
  return (
    <div>page 404.</div>
  )
}

const Page404Demo = () => {
  return (
    <>
      <ul>
        <li><NavLink to={{pathname: '/home', state: {id: 13}}}>home</NavLink></li>
        <li><NavLink to="/about/12">about</NavLink></li>
        <li><NavLink to="/search?id=14">search</NavLink></li>
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
        <Redirect exact from ="/" to={{pathname: '/home', state: {id: 13}}}></Redirect>
        {/* 都不匹配的话， 才匹配 */}
        <Route path="*">
          <Page404></Page404>
        </Route>
      </Switch>
    </>
  )
}

export default Page404Demo