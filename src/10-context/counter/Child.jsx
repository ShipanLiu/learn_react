import React, { Component } from 'react'
import ChildHood from "./ChildHood"
import {CountConsumer} from "./Count"

export default class Child extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count}) => {
              return (
                <div>{count}(from Child)</div>
              )
            }
          }
        </CountConsumer>
        <ChildHood></ChildHood>
      </div>
    )
  }
}
