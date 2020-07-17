/**
 * 柯里化原理模拟
 * 1. 如果传递了全部实参, 也就是形参与实参个数相等, 立即调用函数,并返回结果
 */
function curry(func) {
	return function curriedFn(...args) {
		// 判断实参和形参的个数
		if (args.length < func.length) {
			return function (...rest) {
				return curriedFn(...args, ...rest)
			}
		}
		return func(...args)
	}
}

// 测试
var abc = function (a, b, c) {
	return [a, b, c]
}

var curried = curry(abc)

console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))
