/*
     yarn add memoize-one

     另外一种组件不需要渲染的方法
*/

import React, {useState, useMemo} from 'react'
import memoize from 'memoize-one'




// getNewString 是一个函数， 最好放在外面， 因为你不知道Child会不会错误的refresh。 假如放在里面， Child refresh问题控制不到位，
// getNewString就会被无辜地调用一次。
// 如果你使用 useCallback的话， 肯定必须要放到 Child 里面， 同时 要在Child外面加上memo外衣。  useCallback + memo 配合使用 天衣无缝。
//  getNewString + momo / useMemo

const getNewString = memoize((str) => {
    console.log('getNewString方法被调用');
    return str + 'world'
  })

const Child = function(props) {
  console.log('Child is running');

  return(
    <div>
      <h1>this is Child</h1>
      {getNewString(props.name)}
    </div>
  )
}

export default function Memoize() {




  const add = (a, b) => console.log(' 主组件被调用',a + b);;
  const memoizedAdd = memoize(add);

  //相同的结果只打印一次。
  memoizedAdd(1, 2)
  memoizedAdd(1, 2)
  memoizedAdd(1, 3)
  memoizedAdd(1, 2)
  memoizedAdd(1, 2)






  const [data, setData] = useState({
    name: 'hello',
    age: 27
  })

  // 这样才保证 Child不会refresh.  // 或者使用memo
  const Child1 = useMemo(() => <Child name={data.name} />, [data.name])


  return (
    <div>
      {Child1}
      <button onClick={() => setData(data => ({...data, name: 'jiba'}))}>chnage 'name'</button>
      <span>{data.age}</span>
      {/* age, 没有传给Child， 但是每次age改变的时， 主组件都需要刷新一遍， 而Child也被包括在里面，
      Child 不需要刷新， 这就是目的 */}
      <button onClick={() => setData(data => ({...data, age: data.age+1}))}>age+1</button>
    </div>
  )
}
