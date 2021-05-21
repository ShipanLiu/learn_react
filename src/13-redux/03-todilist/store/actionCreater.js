/*
    就是一个函数的合集
*/



const removeAction = (index) => {
  return {
      type: 'REMOVE_DATA',
      index
  }
}

// 现在不是return 一个Obj了， 而是一个函数， 即使你return一个函数， 中间件也会帮助你调用
// 为什么会支持函数，而不是一个扁平的obj呢， 因为使用了middleware。
const putdataAction = task => {
  return {
    type: 'PUT_DATA',
    task
  }
}

// 这个做同步
const setdataAction = (data) => {
  return{
    type: 'SET_DATA',
    data
  }
}

//这个做异步， 异步操作也需要调用同步操作， 把data传进去
const loaddataAction = () => {
   return (dispatch) => {
      fetch('/job.json')
    .then(response => response.json())
    .then(result => {
      dispatch(setdataAction(result.result))
    })
}
}

export {
  removeAction,
  putdataAction,
  loaddataAction
}