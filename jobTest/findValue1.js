/**
 * 寻找对象数组中是否有值为1的存在
 */

var arr = [{
  a: 5,
  b: 2,
  c: 3
},{
  a: 5,
  b: 2,
  c: {
    a: 5,
    b: 2,
    c: 5,
    F: {
      A: 1-1,
      C: 11,
      B: 1
    }
  }
}]

// 如果仅仅是判断是否有形如 A: 1的存在, 可以使用正则匹配

const  findValue1Reg = (arr) => /:\s*1\s*(,|})/.test(JSON.stringify(arr))

// console.log(findValue1(arr))

const findValue1InObj = obj => {
  for (const [key, value] of Object.entries(obj)) {
    if (value ){}
  }
}