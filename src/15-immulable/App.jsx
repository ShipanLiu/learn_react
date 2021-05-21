/*
  有了这个immuable， 就可以做精细化的编程。
*/

import React, { Component } from 'react'
import {
  Map,
  List
} from "immutable"


export default class App extends Component {
  constructor(props) {
    super(props)
    this.demo1 = this.demo1.bind(this)
  }


demo1() {
  /*  let map1 = Map({
    a: 0,
    b: 1
  })

 // console.log(map1)
  // 两着是相同的， 共享一个地址， 到那时两者又是独立的。
  let map2 = map1
  // map2.set('a', 100)   这样的修改是错误的, map2只是map1的一个克隆。 比较共享
  map2 = map1.set('a', 100)
  console.log(map1.get('a'));  //0
  console.log(map2.get('a'));  //100 */



 /*  let map1 = Map({x:0, y:1})
  let map2 = Map({x:0, y:1})

  console.log(map1 === map2);  // false, 因为内存里面是两份。

  //比较值：
  console.log(map1.equals(map2)); // true */



// JS API, 这里的List， 也是特有的， 下面有一大堆

const list1 = List(['a', 'b', 'c'])
const list2 = list1.push('d')
console.log(list1);  // 不会改
console.log(list2);  // 增加了d



// 下面的代码改到了 index.js 里面去去写。

















}





  render() {
    return (
      <div>
        {
          this.demo1()
        }
      </div>
    )
  }
}
