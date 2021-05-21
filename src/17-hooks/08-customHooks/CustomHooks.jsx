import React, {useState} from 'react'
import useDataList from './useDataList'

export default function CustomHooks() {

  console.log(useDataList(0));

  return (
    <div>
      hello
      <button>-</button>
      <button>+</button>
    </div>
  )
}
