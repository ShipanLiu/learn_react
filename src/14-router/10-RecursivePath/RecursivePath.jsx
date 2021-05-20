import React from 'react'
import {
  Route,
  useLocation,
  useHistory
} from "react-router-dom"

export default function RecursivePath() {
  return (
    <div>
      <Person></Person>
    </div>
  )
}


function Person(props) {
  let {url} = useLocation()
  console.log(url);
  return(
    <h1>aa 's friends: </h1>
  )

}


const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
]
