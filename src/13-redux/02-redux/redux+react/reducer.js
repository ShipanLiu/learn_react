const defaultState = {
  count: 0
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'increment':
      return {
        count: state.count++,
        ...state
      }
      case 'decrement':
      return {
        count: state.count--,
        ...state
      }
      default:
        return state
  }
}

export default reducer