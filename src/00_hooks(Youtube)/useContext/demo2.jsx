import React from "react"
import {Contextprovider} from "./reducer"
import Counter from './Counter'
import CounterTest from './CounterTest'

const Demo2 = () => {
  return (
    <div>
      <Contextprovider>
        <Counter/>
        <CounterTest/>
      </Contextprovider>
    </div>
  )
}

export default Demo2