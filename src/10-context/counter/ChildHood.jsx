import React, { Component } from 'react'
import {CountConsumer} from "./Count"

// 注意： 此次引入为了展示Consumer的嵌套
import {Consumer as ShowConsumer} from "./showContext"

export default class ChildHood extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count, increment, decrement}) => {
              return(
                <>

                <ShowConsumer>
                  {
                    ({name}) => (
                      <div>{count}(from ChildHood) **** {name}</div>
                    )
                  }
                </ShowConsumer>

                <div>
                  <button onClick={() => increment(1)}>+</button>
                </div>
                <div>
                  <button onClick={() => decrement(1)}>-</button>
                </div>
                </>
              )
            }
          }
        </CountConsumer>
      </div>
    )
  }
}


/*
  在这里面进行count的修改， 在 Child里面进行展示
*/