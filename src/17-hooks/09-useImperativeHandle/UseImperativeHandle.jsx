/*
  useImperativeHandle 可以让父组件扩区子组件内的索引。
*/

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
}

// 把 ChildInputComponent 里面的ref 传给 ChildInput， 不想props， ref不能直接传， 需要forwardRef
const ChildInput = forwardRef(ChildInputComponent);

function App() {
  const inputRef = useRef(null);
  // 一旦加载了， input框就自动闪烁。
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      {/*ChildInput 可以拿到 ChildInputComponen组件内部的 ref  */}
      <ChildInput ref={inputRef} />
    </div>
  );
}

export default App