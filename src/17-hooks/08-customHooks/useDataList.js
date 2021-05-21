/*
  hooks are all  js
*/
import {useState,  useEffect} from 'react'
const useDataList = function(id) {
  let [list, setList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      id === 1 ? setList(['a', 'b', 'c']) : setList(['d', 'e', 'f'])
    }, 1000)
    // return () => {

    // }
  }, [])

  // useState([]) 负责refresh， 返回list， 主组件里面 无法更新的问题
  return list
}

export default useDataList