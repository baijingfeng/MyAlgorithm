/*
 * @lc app=leetcode.cn id=1239 lang=javascript
 *
 * [1239] 串联字符串的最大长度
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  if (arr.length === 1) {
    return arr[0].length
  }
	arr.sort((a, b) => b.length - a.length)
  // console.log('arr', arr)
  
  for (let i = 0; i < arr.length; i++) {
    console.log('arr', arr)
    if (arr[i].length > [...new Set(arr[i])].length) {
      arr.splice(i, 1)
      i--
      continue
    }
    
    for (let j = i + 1; j < arr.length; j++) {
      const targetStr = arr[i] + arr[j]
      if (targetStr.length > [...new Set(targetStr)].length) {
        console.log('arr[i]', arr[i])
        console.log('arr[j]', arr[j])
        arr.splice(j, 1)
        j--
      }
    }
  }
  console.log('arr', arr)
  return arr.reduce((acc, item) => acc + item.length, 0)
}
// @lc code=end

maxLength(["ab","cd","cde","cdef","efg","fgh","abxyz"])
