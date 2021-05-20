/*
    在类组件的面 onClick 后面的函数 可以 this.handleClick， 但是函数组件里面 就不能存进this去了。 这导致了在函数组件每次有传递函数的
    情况下， 都会重新渲染组件。 浪费资源。

    而 useCallback 就可以记忆一个函数

    useCallback（） 的使用

    PureComponent 是在类组件里
    React.memo  是在fun 组件里面

*/



import React, {useState, useCallback, memo} from 'react'



// function Child(props) {
//    console.log('child running');
//   return(
//     <>
//       <h1>hello</h1>
//       <button onClick={props.onAdd}>add</button>
//     </>
//   )
// }



// export default function UseCalback() {

//   console.log('parent running');
//   const [data, setData] = useState({
//     count: 0
//   })

//   const handleClick = () => {
//     setData(data => ({
//       count: data.count + 1
//     }))
//   }
//   return (
//     <div>
//       {data.count}
//       {/* 把onadd 添加到 Child的属性上 */}
//       <Child onAdd={handleClick}/>
//     </div>
//   )
// }

/*
  上面的问题：  只要 主组件run一次， 或者说： 数字加一， 子组件就需要更新一遍。

  我们的预期： Child 第一次run 之后， 以后就不要run了。 没有必要run
  下面是改进

*/

const Child = memo(
  // memo 只针对props没有修改的情况， 会第哦啊用记忆了的函数， 到那时主组件 改变了 Child 的 props，
  // 因为 onAdd每次指向一个新的函数. memo 的第二个函数 是一个比较函数。
  function(props) {
    console.log('child running');
    return(
      <>
        <h1>hello</h1>
        <button onClick={props.onAdd}>add</button>
      </>
    )
  },

)


export default function UseCalback() {

  console.log('parent running');
  const [data, setData] = useState({
    count: 0
  })


  // const handleClick = () => {
  //   console.log('added');
  // }

  //方案二
  // 一旦【】里面的值发生变化， useCallback就会重新返回一个新的记忆函数提供给后面进行渲染。
  //而这里是一个空【】， 所以不会返回新的函数， 而是返回 老 的函数。
  // Child 被包裹着， 每次主组件调用的时候， Child都会被执行，尤其是setData的时候。
  const handleClick = useCallback(() => {
    console.log('added');
  }, [])

  return (
    <div>
      {data.count}
      {/* 把onadd 添加到 Child的属性上 */}
      <Child onAdd={handleClick}/>
      <button onClick={() => setData(data => ({count: 100}))}>变成100</button>
    </div>
  )
}
