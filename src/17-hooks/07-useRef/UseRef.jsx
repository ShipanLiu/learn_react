/*
  createRef ,  是老的方法
  useref 是新的方法
*/


import React, {createRef, useRef, useref} from 'react'

/* export default function UseRef() {

  // const btn = createRef()
  const btn = useRef()

  function handleClick() {
    console.log(btn.current);  //<button>click</button>
  }

  return (
    <div>
      <button ref={btn} onClick={handleClick}>click</button>
    </div>
  )
} */



 /*
    下面验证useRef的一些特性. 我们想要规避 capture value 属性。（就是三秒之内输出一个1 ， 一个零。 而不是 两个 0）
    我们希望输出两个0.   在class组件不用考虑 capture value 的影响

  */

    export default function UseRef() {
      // defult value of count is 0
      const count = useRef(0)

      const handleClick = (num) => {
        count.current += num
        setTimeout(() => {
          console.log("count:" + count.current);
        }, 2000)
      }

      return (
        <div>
          <p>you clicked {count.current} times</p>
          <button onClick={() => handleClick(1)}>change to 1</button>
          <button onClick={() => handleClick(-1)}>change to -1</button>
        </div>
      )
    }
