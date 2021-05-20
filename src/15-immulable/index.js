const {
  Map,
  List,
  Seq,
  fromJS
} = require("immutable")

// 封装一个函数
function toJSLogJiba(imm) {
  console.log(imm.toJS());
}



// demo1 JS API, 这里的List， 也是特有的， 下面有一大堆
/*
const list1 = List(['a', 'b', 'c'])
const list2 = list1.push('d')
const list3 = list1.unshift('z')
log(list1);  // 不会改
log(list2);  // 增加了d
log(list3.toJS()); // [ 'z', 'a', 'b', 'c' ] */




/* // demo2  把每个key 转成字符串， 然后拼接起来。

const map = Map({x: 0, y: 1, z: 2})

let result = map.map((v,k) => {
  return k.toUpperCase()  // 改成大写
})

console.log(result);  // 返回的是一个Map对象
toJSLog(result) // { x: 'X', y: 'Y', z: 'Z' }

let result2 = result.join('/')  // 把{ x: 'X', y: 'Y', z: 'Z' } 里面的 value拼接在一起， 然后用 ‘/’ 分隔
console.log(result2); // X/Y/Z */




/* // value key 对调反转 flip

const map = Map({x: 0, y: 1, z: 2})
const result1 = map.flip()
toJSLogJiba(result1) // { '0': 'x', '1': 'y', '2': 'z' }

const result2 = map.flip().map((v, k) => v.toUpperCase())
toJSLogJiba(result2)  // { '0': 'X', '1': 'Y', '2': 'Z' }
console.log(result2.join('/')); //X/Y/Z */




/* // merge 深 还是 浅

const map1 = Map({
  x: 0,
  y: 1,
  z: {
    o: 230,
    w: 10
  }
})

const map2 = Map({
  a: 100,
  y: 200,
  z: {
    w: 300
  }
})

const map3 = map1.merge(map2)
toJSLogJiba(map3)    // { x: 0, y: 200, z: { w: 300 }, a: 100 }  map2会把map1覆盖掉，  map1 的o 不会保留

const map4 = map1.mergeDeep(map2)
toJSLogJiba(map4)    //{ x: 0, y: 200, z: { o: 230, w: 300 }, a: 100 }  map1 的o 会保留
console.log(map1);    //  map1的数据会保留

// Obj也可以merge
const obj = {
  y: 1000
}

const map5 = map1.mergeDeep(obj, map2) // { x: 0, y: 200, z: { o: 230, w: 300 }, a: 100 }
const map5 = map1.mergeDeep(obj, map2) // { x: 0, y: 1000, z: { o: 230, w: 300 }, a: 100 }
toJSLogJiba(map5)
 */




/* // concat
const list1 = List(['a', 'b', 'c',])
const list2 = List(['d', 'f',])
const arr = ['j', 'b']

const list3 = list1.concat(list2, arr)

toJSLogJiba(list3)  //['a', 'b', 'c', 'd', 'f', 'j','b'] */





// const obj = {
//   x: 1,
//   y: 2
// }

// const seq = Seq(obj).map((value, key) => {
//   console.log(value);
//   return value
// })

// toJSLogJiba(seq)  // { x: 1, y: 2 }




/* // fromJS
const obj = {
  x: 0,
  y: [
    {
      z: {
        a: 100
      }
    },
    ['100', '200', {
      w: 3000
    }]
  ]
}

const result = fromJS(obj)
console.log(result);

// 相当于把obj 转化成 immu 了。
相当于：
Map({
  x: 0,
  List([
    Map({
      Map({
        a: 100
      })
    })....
  ])....
})
 */




// 混在一起

// let obj = {
//   x: Map({a: 0}),
//   y: List(['a'])
// }

// console.log(obj);  //但是外层的obj不包含immu 属性

// const obj = {
//   x: 0,
//   y: [
//     {
//       z: {
//         a: 100
//       }
//     },
//     ['100', '200', {
//       w: 3000
//     }]
//   ]
// }

// const result = fromJS(obj)
// console.log(result.get('y'));





/* //  各种to, 不用引入， 直接用

const deep = Map({a: 1, b: 2, c: List([3, 4, 5])})

console.log(deep.toObject());  // toObject() 针对Map
console.log(deep.toJS());  // toJS() 很牛逼 { a: 1, b: 2, c: [ 3, 4, 5 ] }

const list = List(["ji", "ba"])
console.log(list.toArray());
console.log(list.toObject()); // { '0': 1, '1': 2 }
 */





//展开运算符

const map1 = Map({a: 1, b: 2})
// const map2 = {
//   ...map1.toJS(),
//   c: 3
// }

// console.log(map2);  //{ a: 1, b: 2, c: 3 }

// const map3 = Map({
//   ...map1,
//   c: 4
// })
// console.log(map3.toJS());  // 结果是混乱, Map 里面套Map

/* const obj = {x: 0, y: 1}
const map2 = Map({
  ...obj,
  c:3
})

console.log(map2.toJS());  */ // { x: 0, y: 1, c: 3 }


/*
// List不像Map那样倔强

const list = List(["ji", "ba"])

const arr = [
  ...list,
  'dan'
]

console.log(arr);  // [ 'ji', 'ba', 'dan' ]
 */


// // 拿到数值

// // const map = Map({
// //   x: 0,
// //   y: List(['a', 'b'])
// // })


// // console.log(map.get('y').get(1)) //b

// // 更复杂怎么办？
// const map = Map({
//   x: 0,
//   y: List(['a', Map({f: 900})]),
//   z: Map({
//     w: 100
//   })
// })

// // //拿到 w and f
// //  console.log(map.getIn(['z', 'w']));  // 100
// //  console.log(map.getIn(['y', 1, 'f']));  // 900


// // // 更改 f的值。注意返回一个新的Map， 不会更改原来的。
// //  console.log(map.setIn(['y', 1, 'f'],10000).toJS());  //{ x: 0, y: [ 'a', { f: 10000 } ], z: { w: 100 } }


// // update   updateIn 方法

// // const res = map.update('x', (v) => {
// //   return v + 101
// // })
// // console.log(res.toJS());  //{ x: 101, y: [ 'a', { f: 900 } ], z: { w: 100 } }

// const res1 = map.updateIn(['y', 1, 'f'], (v) => {
//   return v / 100
// })
// console.log(res1.toJS()) // { x: 0, y: [ 'a', { f: 9 } ], z: { w: 100 } }