function permAlone(str) {
	return str
}

// permAlone('aab')

/** 实现自定义map方法 */

Array.prototype.selfMap = function() {
	const array = this
	const result = new Array(array.length)
	const [fn, thisArg] = [].slice.call(arguments)

	if (typeof fn !== 'function') {
		throw new TypeError(fn + 'is not a function')
	}

	for (let i = 0; i < array.length; i++) {
		if (i in array) {
			result[i] = fn.call(thisArg, array[i], i, array)
		}
	}

	return result
}

// const a = new Array(1,2,3,4)

// console.log([...a.selfMap(item => item + 1)])

/** 实现自定义map方法 */

/** 使用reduce实现map方法 */

const reduceMap = (fn, thisArg) => {
	return list => {
		if (typeof fn !== 'function') {
			throw new TypeError(fn + 'is not a function')
		}
		if (!Array.isArray(list)) {
			throw new TypeError('list must be a Array')
		}

		if (list.length === 0) return []

		const result = new Array(list.length)

		return list.reduce((acc, cur, index) => {
			// 修复稀疏数组的情况
			if (index in list) {
				acc[index] = fn.call(thisArg, cur, index, list)
			}

			return acc
		}, result)
	}
}

console.log(reduceMap(x => x + 1)([1, 2, 3]))

console.log('object')

/** 使用for循环实现自己的filter函数 */
Array.prototype.selfFilter = function() {
	const ary = this
	const result = []
	const [fn, thisArg] = [].slice.call(arguments)

	if (typeof fn !== 'function') {
		throw new TypeError(fn + 'is not a function')
	}
	const result = []
	for (let i = 0; i < ary.length; i++) {
		if (i in ary && fn.call(thisArg, ary[i], i, ary)) {
			result.push(ary[i])
		}
	}
	return result
}

const a = new Array(1, 2, 3)
a.selfFilter(item => item % 2 === 0) // [ 2 ]
a.selfFilter(function(item) {
	console.log(this)
	return item % 2 === 0
}, {})

/** 使用reduce实现自己的fliter函数 */

// 同map, 不定义在Array的原型上
const reduceFilter = (fn, thisAry) => {
	return list => {
		if (typeof fn !== 'function') {
			throw new TypeError(fn + 'is not a function')
		}
		if (!Array.isArray(list)) {
			throw new TypeError('list must be a Array')
		}
		if (list.length === 0) return []
		return list.reduce((acc, value, index) => {
			return index in ary && fn.call(thisAry, value, index, list) ? acc.concat([value]) : acc
		}, [])
	}
}

reduceFilter(x => x % 2 === 0)([1, 2, 3]) // [ 2 ]
