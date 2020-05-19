/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	if (nums.length === 1) {
		return nums[0]
	}

	let result = (min = max = 1)

	let isChanged = false

	for (let value of nums) {
		if (value === 0) {
      min = max = 1
			continue
		} else if (value < 0) {
			if (min < 0) {
				let temp = min * value
				result = Math.max(result, temp)
				isChanged = true
				min = 1
				max = temp
			} else {
				min = max * value
				max = 1
			}
		} else {
			let temp = max * value
			result = Math.max(result, temp)
			isChanged = true
			max = temp
		}
	}

	return isChanged ? (result < 0 ? 0 : result) : 0
}
// @lc code=end

maxProduct([-2, 0, -1])
