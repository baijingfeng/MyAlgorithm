/** 有重复字符串的排列组合1 */
permutation1('abc')

function permutation1(str) {
	const ret = []

	if (str.length === 0) {
		return
	}

	const strArr = str.split('').sort()

	const used = new Array(strArr.length).fill(false)

	helper(strArr, used, '', ret)

	return console.log([...new Set(ret)]), [...new Set(ret)]
}

function helper(strArr, used, cur, ret) {
	console.log(cur)
	if (cur.length === strArr.length) {
		ret.push(cur)
		return
	}

	for (let i = 0; i < strArr.length; i++) {
		if (!used[i]) {
			used[i] = true
			// console.log('begin', used, i)
			helper(strArr, used, cur + strArr[i], ret)
			used[i] = false
			// console.log('end', used, i)
		}
	}
}

/** 有重复字符串的排列组合2 */

var permutation2 = function(S) {
	var res = []
	var used = []
	var strArr = S.split('').sort()
	dfs(strArr, '')
	return res

	function dfs(strArr, cur) {
		if (cur.length == strArr.length) {
			res.push(cur)
			return
		}

		for (var i = 0; i < strArr.length; i++) {
			if (used[i] && used[i] == 1) continue
			if (i > 0 && strArr[i] == strArr[i - 1] && used[i - 1] == 0) continue

			used[i] = 1
			dfs(strArr, cur + strArr[i])
			used[i] = 0
		}
	}
}
