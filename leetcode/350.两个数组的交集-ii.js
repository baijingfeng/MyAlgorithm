/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let langs, shorts

  if (nums1.length < nums2.length) {
    langs = nums2
    shorts = nums1
  } else {
    langs = nums1
    shorts = nums2
  }

  
  let needDelete = false
  for (let i = 0; i < shorts.length; i++) {
    for (let j = 0; j < langs.length; j++) {
      // console.log(langs, shorts)
      if (langs[j] === shorts[i]) {
        // 删除长数组中的值
        langs.splice(j, 1)
        break
      }
      if (j === langs.length - 1) {
        needDelete = true
      }
    }

    // 删除短数组中的值
    if (needDelete) {
      shorts.splice(i, 1)
      i--
      needDelete = false
    }
    
  }

  return shorts
};
// @lc code=end

intersect([4,9,5], [9,4,9,8,4])