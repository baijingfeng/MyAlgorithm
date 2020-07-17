// 模拟lodash中的函数组合方法 _.flowRight
function flowRight(...fns) {
	return function (value) {
		return fns.reverse().reduce((acc, fn) => {
			return fn(acc)
		}, value)
	}
}

const flowRight = (...fns) => (value) => fns.reverse().reduce((acc, fn) => fn(acc), value)
