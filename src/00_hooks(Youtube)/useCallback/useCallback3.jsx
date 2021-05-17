
/*
本案例知识点：
    - 避免“昂贵的组件”重新渲染。
    - Com1 的 fn1 是个普通的函数。每次渲染 Com1 都是重新生成。
    - Com2 的 fn1 用了 useCallback 避免了重新生成。
      点击 p1+1 Com2 渲染但不会渲染昂贵组件。因为 fn1 没变。
    - 昂贵组件采用 PureComponent 或者 React.memo 生成。
Com1，Com2 是两个组件。
他们都渲染了一个 “昂贵的组件”。
通过 useCallback 避免了重新生成 Com2 的 fn1 callback 函数。因此避免了
昂贵组件的重新渲染。
*/

import React from "react"