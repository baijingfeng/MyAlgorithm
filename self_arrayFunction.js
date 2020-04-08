/** 数组映射为对象 */
function arrToObj(array) {
	const arr = array || [{a: 1, d: 4}, {b: 2}, {c: 3}]

	const obj = arr.reduce((obj, item) => {
		// Object.keys(item).forEach(key => obj[key] = item[key])
		for (key in item) {
			obj[key] = item[key]
		}
		return obj
	}, {})
	console.log({...obj})
}

/** find() */

function selfFind(array) {
	const arr = array || [1, 3, 4, 5, 8]

	const result = arr.find((item, index) => index % 2 === 1 && item % 2 === 1)

	console.log('result', result)

	Array.prototype.selfFind = function (callback) {
		for (let index = 0; index < this.length; index++) {
			if (callback(this[index], index)) {
				return this[index]
			}
		}
	}

	const myResult = arr.selfFind((item, index) => index % 2 === 1 && item % 2 === 1)

	console.log('myResult', myResult)
}

// selfFind()

/**  */