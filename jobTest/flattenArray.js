/** 数组扁平化 */

function flattenArray(sourceArr) {
	const arr = sourceArr || [1, [3, [2, 3, 4]]]

	// 方法一, 递归 + reduce() + concat()
	// 方法二, ... + some() + concat()

	const myfn2 = (targetArr) => {
		const result = []

		targetArr.forEach((item) => {
			if (Array.isArray(item)) {
				result.push(...myfn2(item))
			} else {
				result.push(item)
			}
		})

		return result
	}

	console.log(myfn2(arr))
}

flattenArray()
