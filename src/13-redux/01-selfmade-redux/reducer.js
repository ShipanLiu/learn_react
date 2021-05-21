/*
  reducer 就是change state 的。

  switch函数里面 加上return之后， 就不需要break了。
  但是reducer 不许是一个纯函数， 根据redux的定义

  纯函数：
     1. 相同的入参， 得到相同的输出。
     2. 不能修改入参。
*/

// step2
const changeState = (state, action) => {
  action = action || {type : ''}
  switch(action.type) {
    case 'increment':
      // 重新涂抹 state
      return{
        // 不能写++， 会改变state（redux要求不能改）
        count: state.count++,
        ...state
      }
    case 'decrement':
       return{
        count: state.count--,
        ...state
      }
      //action 是空的话, 也要保证将state传出去。 就是switch的每种情况都要保证state被传出去
    default:
      return state
  }
}

export {
  changeState
}