/*
  useEffect里面 是ajax使用的天地。
*/


import React, {useState, useEffect} from "react"

function UseEffect(props) {
  let [data, setData] = useState({
    count: 0
  })

  // ajsx请求函数。
  function loadData() {
    return fetch('/job.json')
    .then(response => response.json())
    .then(result => {
      return result
    })
  }

  useEffect(() => {
    console.log('effect');
  },[data])

  useEffect(() => {
    console.log('mounted');

    //立即调用函数
    ;(async() => {
      let result = await loadData()
      console.log(result);
    })()

    console.log("我在ajax请求结果前面 出现， 因为是异步操作");

    //卸载的时候调用
    // return () => {
    //   console.log('unmount');
    // }
  }, []) // 【】 只调用一次

  return (
    <>
      <div>{data.count}</div>
      <button onClick={() => setData((data) => ({...data, count: data.count + 1}))}>jiba</button>
    </>
  )
}

export default UseEffect
