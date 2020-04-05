/** 快速排序 */

/** 插入排序 */
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const target = arr[i]

		let j = i
		while (j > 0 && target < arr[j - 1]) {
			arr[j] = arr[j - 1]
			j--
		}
		arr[j] = target
	}
	console.log(arr)
	return arr
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

/** 选择排序 */

function selectionSort(arr) {
	console.time('选择排序耗时')
	for (let i = 0; i < arr.length; i++) {
		let target = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[target]) {
				target = j
			}
		}

		;[arr[i], arr[target]] = [arr[target], arr[i]]
	}

  console.timeLog('选择排序耗时')
  console.log(arr)
	return arr
}

// selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

/** 冒泡排序 */
function bubbleSort(arr) {
  console.time('冒泡排序耗时')
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
  }
  console.timeEnd('冒泡排序耗时')
  console.log(arr)
	return arr
}

// bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
