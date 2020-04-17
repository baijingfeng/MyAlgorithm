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