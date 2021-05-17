// 定义一个状态
const defaultState = {
  count: 0
}



// 更新状态
const changeState = (action) => {
  // 容错处理， 不是所有的dispatch都带着action
  action = action || {type: ''}
  switch(action.type) {
    case 'increment':
      defaultState.count++
      break
    case 'decrement':
      defaultState.count--
      break
    default:
  }
}


// Dom 操作
const renderDom = () => {
  let countEle = document.querySelector('#count')
  countEle.innerHTML = defaultState.count
}


// 最终操作
const dispatch = (action) => {
  changeState(action)
  renderDom()
}

export {
  dispatch
}