/*
  useContext 的作用是： 就是传数据用的。 相当于组件之间的电缆。， 之前使用的是Consumer 和 Provider
*/

import React from 'react'
import {createContext, useContext} from "react"

// 创造一下数据
let nameContext = createContext({
  name: 'jiba'
})

let ageContext = createContext({
  age: 27
})

export default function UseContext() {
  //导入一下数据
  let name = useContext(nameContext)
  let age = useContext(ageContext)
  // console.log(name, age);  //{name: "jiba"}name: "jiba"__proto__: Object {age: 27}
  return (
    <div>
     name is {name.name}<br/>
      age is {age.age}
    </div>
  )
}




// old way
/* return (
    <div>
      <Consumer>
        {
          (value) => {
            return(
              <div>
                <Consumer>
                  {
                    (value) => {
                      return(
                        <div>
                          <p>jiab</p>
                        </div>
                      )
                    }
                  }
                </Consumer>
              </div>
            )
          }
        }
      </Consumer>
    </div>
  ) */