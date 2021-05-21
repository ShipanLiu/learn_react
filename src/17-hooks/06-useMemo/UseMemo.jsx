/*
  useCallback 用于： 记忆函数
   useMemo： 记忆组件 ， 相当于 shouldComponentUpdata()
*/


import React, {useState, useCallback, memo, useMemo} from 'react'

const Childhood = function() {
  console.log('被执行了一次');
  return (
    <div>child hood</div>
  )
}

const Child = memo(
  function(props) {
    console.log('child running');

    const Childhood1 = useMemo(() => <Childhood a={props.a}></Childhood>, [])
    const Childhood2 = useMemo(() => <Childhood b={props.b}></Childhood>, [props.b])

    return(
      <>
        <h1>hello</h1>
        <button onClick={props.onAdd}>add</button>
        {/*  注意不要写成<Childhood1 /> */}
        {Childhood1}
        {Childhood2}
      </>
    )
  },

)


export default function UseCalback() {

  console.log('parent running');
  const [data, setData] = useState({
    count: 0,
    a: 'abc',
    b: 'def'
  })


  // const handleClick = useCallback(() => {
  //   console.log('added');
  // }, [])
  const handleClick = useMemo(() => () => {
    console.log('added');
  }, [])


  return (
    <div>
      {data.count}
      <Child
      onAdd={handleClick}
      a={data.a}
      b={data.b}
      />
      <button onClick={handleClick}>handleClick</button>
      <button onClick={() => setData(data => ({...data, count: 100}))}>变成100</button>
      <button onClick={() => setData(data => ({...data, a: 'jiba'}))}>chnage a</button>
      <button onClick={() => setData(data => ({...data, b: 'dan'}))}>chnage b</button>

    </div>
  )
}


/*
  上面的例子， 一部分是自己写的， 完全说明问题可以
*/