/**
 * 知识点：
 *  - useReducer 就是一个自定义 useState 执行了比较复杂的 state 更新。
 *  - 几个元素。Counter组件，reducer 函数。init函数，dispatch 函数 的作用。
 *  - 通过 dispatch 更新 state
 *  - 通过 init 计算最初的 state
 *  - 从此不在需要 redux
 *
 * 额外：讲个故事
 *  我们知道 redux 以及 mobx 都是并不依赖 React 在其他框架中依然能使用他们的思想。
 *  如果 React 官方没有提出自己的解决方案。
 *  那么这些状态管理可能会进一步发展壮大。 可以理解为 微信和短信之关系。
 *  假设有一天微信说：以后移动手机号码，无法登录微信，会怎么样？当然可以不用这么明显。
 *  相同的，如果有一天其他框架，发展的和 vue 或者其他框架更加适配：最佳搭档。
 *  那意味着什么？ 所以说一项技术必须根基要稳。因此 facebook 挖来了redux 开发者
 *  并让他 接手了facebook 的 hooks 项目，亲手解决了自己的亲儿子 redux 。
 *  这只是开个玩笑，从侧面可以理解Hooks 的重要性。
 *
 *
 * ***********useState 的替代方案****************。 接受类型为 (state, action) => newState 的reducer，
 * 并返回与 dispatch 方法配对的当前状态。（如果你熟悉Redux，你已经知道它是如何工作的。）
 * 不熟悉也不用担心，照样会用，且可以说：我不需要redux。其实是一个人写的。
 *
 */



import React from 'react';
import ReactDOM from 'react-dom';
import { useReducer } from 'react';

const initialCountState  = {count: 0};

/**
 * 输入旧state 根据 action， 执行某一个过程 返回新 state。这就是 reducer 的作用。
 * @param {*} state   输入的 state
 * @param {*} action  根据action 返回新的 state
 */

// reducer 接受一个旧的state， 然后根据action 返回一个新的state
function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {count: action.payload};
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

// useReducer 的第三个参数 是一个函数。输入初始的 state 输出一个新的 state
// 这个函数会最初被执行，替换了初始 state 值。
// state 的初始化， 由此和state下面多了count。
function init(initialCountState) {
  return {count: initialCountState.count+1};
}

// 主体组件， 上面的两个函数是 子函数， 下面要用到
// {initialCount} 是为了 <Counter initialCount={{count: 1}} /> 这样使用， 在App里面挂载的时候
export default function Counter({initialCount}) {
  // dispatch是改变state的函数， 但是要通过 reducer（本身是一个函数） 参数
  //  下面的这个state 才是整个 代码里面的 中心人物
  const [state, dispatch] = useReducer(
    reducer,
    // state初始值
    initialCount,
    // init是定义初始值的函数
    init
  );

  return (
    <React.Fragment>
      现在的Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount.count})}>
        Reset
      </button>
      {/*dispatch 后面的参数就是 action， 而action里面又包含type  */}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </React.Fragment>
  );
}




// 当你涉及多个子值的复杂 state(状态) 逻辑时，useReducer 通常优于 useState
// 根据不同的 action 返回了不同的 新 state