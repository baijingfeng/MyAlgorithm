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
