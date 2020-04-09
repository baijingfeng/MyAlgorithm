/** 自定义实现find() */

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

/** 自定义实现concat() */
Array.prototype.selfConcat() = function(...values) {
	const arr = []
	arr.push(...this)
	if(values.length === 0) {
		return arr
	}
	
	// 将values中的所有数据依次添加到arr中
	values.forEach(value => {
		if (Array.isArray(value)) { // value is a array
			arr.push(...value)
		} else {
			arr.push(value)
		}
	})
	return arr
}

/** 自定义实现slice() */
Array.prototype.selfSlice= function(start, end) {
	const arr = []

	if (this.length === 0) {
		return arr
	}

	start = start || 0
	
	if (start < 0) {
		start = start + this.length
	} else if (start >= this.length) {
		return arr
	}


	end = end || this.length

	if (end > this.length) {
		end = this.length
	} else if (end < 0) {
		end = end + this.length
	}

	for (let i = start; i < end; i++) {
		arr.push(this[i])
	}
	return arr
}

/** 自定义isArray() */
Array.isArray = function (arg) {
	return Object.prototype.toString.call(arg) === '[object Array]'
}