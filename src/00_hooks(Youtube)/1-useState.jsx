/*
useEffect(effect)   告诉 React 在渲染后要做些什么。
类似与：componentDidMount，componentDidUpdate
useEffect的作用原理：当下面的return 渲染完毕之后， useEffect里面的函数就会执行。

React（代码内部）将记住传递的函数(我们将把它称为 “effect” )，
然后在执行DOM更新后调用它。在本案例中，我们设置了文档标题，
但我们也可以执行数据获取或调用其他命令式API。

const [count, setCount] = useState(0)
useState会返回一个数组， 这个数组里面有两个值。
setCount是针对count的一个函数，setCount(count + 1)， 括号里面的参数， 就是count应该有的最新状态。
useState(0)， 里面的值是对 count的默认值。

本例原文：
可以看到，React Hooks 就像一个内置的打平 renderProps 库，我们可以随时创建一个值，
与修改这个值的方法。看上去像 function 形式的 setState，其实这等价于依赖注入，
与使用 setState 相比，这个组件是没有状态的。

小白理解：
注意 useState 是一个“状态逻辑” 可以这么理解：首先你要明白前端或者在React 中什么是状态
不要仅仅和程序中的 state 以及 setState 对应。而是要明白什么是状态。然后 state 和 setState
只是 React 本身对状态的一个实现逻辑。Redux,mobx 等也是对状态这种数据的管理方式。
好了现在再看“状态逻辑” 就可以理解了：就是和这种“状态数据”变化相关的代码逻辑。
对 React 本身通过 setState 来实现。也就是需要实现一个 class。然后通过“渲染回调” 把逻辑注入给
子组件。 App1 实现的也没问题。再来看 hooks 的实现方法。
不需要外部的 包含 state 的组件。直接用 useState 就是实现了简单的 state 和 setOpen 的处理逻辑。
当然如果你有复杂的逻辑可以通过自定义 hooks 来实现。好的。
那么最重要的区别就是 减少了层级，减少了组件。并且可读性更好。封装性更好。并且可以对
“状态相关的逻辑”进行更好的重用和共享。

总结优点：
React Hooks 带来的好处不仅是 “更 FP，更新粒度更细，代码更清晰”，还有如下三个特性：
  1. 多个状态不会产生嵌套，写法还是平铺的（renderProps 可以通过 compose 解决，
      可不但使用略为繁琐，而且因为强制封装一个新对象而增加了实体数量）。
      我们可以看到 app1 中如果再有一个 "状态相关逻辑" ，则必须再嵌套一个 组件。
  1. Hooks 可以引用其他 Hooks。
  1. 更容易将组件的 UI 与状态分离。

*/


import React, {useState} from "react"
import {Button} from "antd"
import Modal from "antd/lib/modal/Modal"



export function Example1() {
  const [count, setCount] = useState(0)
  const countAction = (preCount, b) => preCount + b

  return (
    <div>
      <p>Example1: you clicked {count} times</p>
      <Button onClick={() => setCount(countAction(count, 2))}>Example1:click me</Button>
    </div>
  )

}

//下面是一个渲染回调的 类 组件

// class Toggle extends React.Component {
//   state={on:false}
//   constructor(props) {
//     super(props);
//     //在props下面定义； initial 属性
//     this.state.on = this.props.inital
//   }
//   toggle = () => {
//     return this.useState(
//       {on: !this.state.on}
//     )
//   }
//   render() {

//     /*
//       this.props.children是 Toggle 组件下面的空白。这叫 渲染回调。
//       传递两个参数 自然 <Toggle> </Toggle> 在下面会被用到
//     */

//     //已经过时， 无法使用
//     return (
//       this.props.children(this.state.on, this.toggle)
//     )
//   }
// }

// export function Toggle2() {
//   return (
//     <Toggle initial={false}>
//       {
//         (on, toggle) => {
          // <React.Fragment>
          //   <Button type="primary" onClick={toggle}>open Modal</Button>
          //   <Modal
          //     visible={on}
          //     onOk={toggle}
          //     onCancel={toggle}
          //   />
          // </React.Fragment>
//         }
//       }

//     </Toggle>
//   )
// }

//上面传统写法的 代替
export function Toggle() {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <Button type="primary" onClick={() => setOpen(true)}>open Modal</Button>
      <Modal
        visible={open}
        // 不管点击哪个， 都会关闭提示框
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </React.Fragment>
  )

}
