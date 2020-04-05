/** JS如何判断一组数字是否连续  */
var arr = [3, 4, 13, 14, 15, 17, 20, 22]

function test(arr) {
	if (arr.length < 2) {
		return arr
	}

	const retArr = []
	let tempArr = [arr[0]]

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === arr[i - 1] + 1) {
			tempArr.push
		}
	}

	return retArr
}

/** 九宫格输入法 */
var enter = '22 5555 22 666 00 88 888 7777 4444 666 44'

function jiugongge(enter) {
	const key = ['0 ', '1,.?!', '2ABC', '3DEF', '4GHI', '5JKL', '6MNO', '7PQRS', '8TUV', '9WXYZ']

	let rst = ''
	let begin = 0
	let end = 0
	for (let i = 0; i < enter.length; i++) {
		if (enter[i] === ' ' || i === enter.length - 1) {
			let count = end - begin

			if (i === enter.length - 1) {
				count++
			}

			let index = (count - 1) % key[enter[begin] - '0'].length

			rst += key[enter[begin] - '0'][index]
			begin = i + 1
		}
		end++
	}
	console.log(rst)
	console.log('\n')
}

/** 航班预定座位数 */

var bookings = [
	[1, 2, 10],
	[2, 3, 20],
	[2, 5, 25]
]
var n = 5

function flightBookings(bookings, n) {
	// let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
	let rst = new Array(n).fill(0)

	for (let [i, j, num] of bookings) {
		rst[i - 1] += num

		if (j < n) {
			rst[j] -= num
		}
	}

	for (let k = 1; k < n; k++) {
		rst[k] += rst[k - 1]
	}

	console.log(rst)
	return rst
}

/** 报数游戏 */

function baoshu(n, m, k) {
	let numberOfPersons = 0 // 当前报数人的编号
	let currentNumber = 0 // 当前的报数

	let currentTimes = 0 // 第m个人已经拍手的次数

	// 初始时向右报数
	let flag = 1

	// 已经拍手的次数小于要求拍手的次数
	while (currentTimes < k) {
		// 报数报到了最右边
		if (numberOfPersons >= n) {
			flag = -1
		}

		// 报数报到了最左边
		if (numberOfPersons <= 1) {
			flag = 1
		}
		// 报数人编号加1或减1
		numberOfPersons += flag
		// 报的数加1
		currentNumber++

		// 轮到第m个人报数了
		if (numberOfPersons === m) {
			// 第m个人报的数是7的倍数，或者包含数字7
			if (currentNumber % 7 === 0 || String(currentNumber).includes('7')) {
				currentTimes++
			}
		}
	}

	console.log(currentNumber)

	return currentNumber
}

/** 字符串分割 */

substring(start, end)

/** 单词压缩编码 */
function yasuo(words) {
	let rst = 0
	const tempArr = words
		.map(item =>
			item
				.split('')
				.reverse()
				.join('')
		)
		.sort()

	for (let i = 0; i < tempArr.length; i++) {
		if (i + 1 < tempArr.length && tempArr[i + 1].includes(tempArr[i])) {
			continue
		}
		rst += tempArr[i].length + 1
	}

	return rst
}

/** 盛最多水的容器 */

function maxArea(height) {
	let left = 0
	let right = height.length - 1
	let area = 0

	while (left < right) {
		area = Math.max(area, Math.min(height[left], height[right]) * (right - left))

		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}

	return area
}

/** 判断有效字符串 */

/** 两个大数相加 */
function dashu(str1, str2) {
	if (str1 == null || str1.length === 0) return str2
	if (str2 == null || str2.length === 0) return str1

	let maxLength = Math.max(str1.length, str2.length)

	let rst = ''

	str1 = str1
		.split('')
		.reverse()
		.join('')
	str2 = str2
		.split('')
		.reverse()
		.join('')

	let minLength = Math.min(str1.length, str2.length)
	let carry = 0
	let currentNum = 0
	for (let i = 0; i < minLength; i++) {
		currentNum = str1.charAt(i) + str2.charAt(i) - 2 * '0' + carry
		carry = (currentNum / 10) | 0
		currentNum %= 10
		rst += currentNum
	}

	if (str1.length < str2.length) {
		str1 = str2
	}
}

/** 候选人算法 */
let a = [1, 2, 3, 1, 2, 1, 1, 6, 1, 1]

function houxuan(a) {
	let candidate = a[0]
	let vote = 0

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== candidate) {
			if (vote === 0) {
				candidate = a[i]
				vote = 1
			} else {
				vote--
			}
		} else {
			vote++
		}
	}

	return [candidate, vote]
}

/** 字符串压缩 */

function compressString(S) {
	if (!S) return ''

	let res = S[0]
	let temp = S[0]
	let count = 1
	for (let i = 1; i < S.length; i++) {
		if (S[i] === temp) {
			count++
		} else {
			res += count
			count = 1
			temp = S[i]
			res += temp
		}
	}

	res += count

	return res.length < S.length ? res : S
}
/** 集五福 */

function getWFCount() {}

/** 分子弹 */

/** 打印顺序 */

/** 打印顺序js版本 */
function printOrder(input) {
	if (input.length <= 0) {
		return
	}

	let printFlag = 0

	let tempList = [...input]

	// for (let i = 0; i<input.length; i++) {
	// 	tempList.push(input[i])
	// }

	do {
		let boolFlag = false
		let head = tempList[0]
	} while (tempList.length > 0)
}

/** 集五福 */

/** 两个列表差额最小 */

/** 两个大数相加 */
