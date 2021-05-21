/*
  切记reducer就是一个纯函数

*/
const defaultState = {
  list: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    // 在List里面的componentDidMount 里面调用
    case 'SET_DATA':
      // console.log(action.data);  打印data没有意义， 需要修改data
      return{
        ...state,
        list: action.data
      }
    case 'PUT_DATA':
      return {
        // 影响了， list里面新来的在前面还是在和后面。
        list: [
          ...state.list,
          {
            positionId: new Date().getTime(),
            positionName: action.task
          }
        ]
      }
      //如何实现delete？ 刷新状态, 千万不要修改state， 而是返回一个新的state。
      case 'REMOVE_DATA':
        let newList = state.list.filter((value, index) => {
          return index !== action.index
        })
        return{
          ...state,
          list: newList
        }
    default:
      return state
  }
}

export default reducer
