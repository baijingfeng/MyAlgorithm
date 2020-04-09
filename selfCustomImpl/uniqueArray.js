/** 数组去重函数实现 */

function uniqArrTest(arr) {
	const testArr = arr || [2, 3, 5, 7, 2, 8, 7]

	const uniqArr1 = (targetArr) => {// 方法一, 双重遍历
		const resultArr = []

		targetArr.forEach((item) => {
			if (resultArr.indexOf(item) < 0) {
				resultArr.push(item)
			}
		})

		return resultArr
  }
  
  const uniqArr2 = (targetArr) => {// 方法二, 单次遍历, 对象容器
    const resultArr = []
    const obj = {}

    targetArr.forEach((item) => {
			if (!obj.hasOwnProperty(item)) { //或者(!obj[item])
        obj[item] = true
				resultArr.push(item)
			}
    })
    
    return resultArr
  }
  
  const uniqArr3 = (targetArr) => {// 方法三, ES6语法Set
    // return Array.from(new Set(targetArr))
    return [...new Set(targetArr)] 
  }
  


	console.log(uniqArr3(testArr))
}

uniqArrTest()
