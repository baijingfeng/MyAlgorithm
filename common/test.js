const params = [2, 8, 3, 80, 1500, 15000, 150000, 2147483647]

function numLenth(num) {
	let length = 0
	while (num > 0) {
		num = (num / 10) | 0
		++length
	}
	return length
}

function count(num) {
	let res = 0
	while (num > 0) {
	
		res += numLenth(num)
		num--
	}
	//  console.log('count' , res)
	return res
}

function findNum(target) {
	let last = 1
	let current = 0

	while (target > current) {
		current += count(last)
		// console.log(last, count(last), current)
		last++
	}

	let targetCount = target - current + count(last - 1)

	// console.log(targetNum, targetCount)

	let acc = 0,
		indexNum = 1

	while (acc < targetCount) {
		acc += numLenth(indexNum)
		indexNum++
	}
	const index = targetCount - acc + numLenth(indexNum - 1)
	const result = String(indexNum - 1)[index - 1]
	console.log(result)
	return result
}



const input = params.slice(1)
const resultArr = input.map(num=> findNum(num))

console.log(resultArr)

// console.log(findNum(80))

// findNum(80)

function findDigit2(num) {
	let str = '', index = 1, last = 1, resNum = num, preStr = '',

	while (num > 0) {
		let tempStr = ''
		while (index <= last) {
			tempStr += index
			index++
		}

		preStr = str

		str = tempStr
		

		// console.log('tempStr', tempStr)
		str += tempStr
		// console.log('str', str)
		num -= tempStr.length

		// console.log('num', num)
		index = 1, last++
	}
	// console.log('LastStr', str)
	console.log('str[num]', str[resNum - 1])
	return str[resNum - 1]
}

findDigit2(2147483647)