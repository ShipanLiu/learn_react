import React, {useState}from 'react'

export default function USeState() {
  const [obj, setObj] = useState({
    count: 0,
    name: 'jiba'
  })

  const handleClick = (e) => {
    //  里面的count就是 外面的count
    setObj({
      ...obj,
      count: obj.count + e
    })
  }
  return (
    <div>
      <p>{obj.count}</p>
      <button onClick={() => handleClick(2)}>add2</button>
    </div>
  )
}

/*
   setState: 非覆盖式 更新状态，
   useState: 覆盖式更新状态。  需要开发者自己处理逻辑。
*/
