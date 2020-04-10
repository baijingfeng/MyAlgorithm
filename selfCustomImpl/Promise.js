/**
 * Promise 构造函数模块
 * 
 * promise错误透传
 * 中断Promise链 return new Promise(()=>{})
 */
//IIFE
;(function (window) {
	function Promise(excutor) {
		const self = this
		self.status = 'pending'
		self.data = undefined // 用来存储结果数据属性data

		self.callbacks = [] // 用来存储待执行成功和失败的回调数组容器

		/** 用来制定promise成功的状态和失败的状态
		 * 1. 指定status为'resolved'
		 * 2. 指定data为value
		 * 3. 可能需要去执行已保存的待执行成功的回调函数
		 */
		function resolve(value) {
			self.status = 'resolved'
			self.data = value

			if (self.callbacks.length > 0) {
				setTimeout(() => {
					self.callbacks.forEach((callbackObj) => {
						callbackObj.onResolved(value) // 放入回调队列里(此处应该用微队列, 这里用宏队列来模拟)
					})
				}, 0)
			}
		}

		function reject(reason) {
			self.status = 'rejected'
			self.data = reason

			if (self.callbacks.length > 0) {
				setTimeout(() => {
					self.callbacks.forEach((callbackObj) => {
						callbackObj.onRejected(reason) // 放入回调队列里(此处应该用微队列, 这里用宏队列来模拟)
					})
				}, 0)
			}
		}

		try {
			excutor(resolve, reject)
		} catch (error) {
			// 一旦执行器执行抛出异常, promise变为失败, 且结果数据为error
			reject(error)
		}
	}

	Promise.prototype.then = function (onResolved, onRejected) {
		// then()返回的promise结果由then()指定的回调函数执行的结果决定
		// then返回的Promise失败的情况有两种, 抛出一个异常,或者返回一个失败的promise

		const self = this

		onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: (reason) => {
						throw reason
				  }

		return new Promise((resolve, reject) => {
			function handle(callback) {
				try {
					const result = callback(self.data)
					if (result instanceof Promise) {
						result.then(resolve, reject)
					} else {
						resolve(result)
					}
				} catch (error) {
					reject(error)
				}
			}

			if (self.status === 'resolved') {
				setTimeout(() => {
					handle(onResolved)
				}, 0)
			} else if (self.status === 'rejected') {
				setTimeout(() => {
					handle(onRejected)
				}, 0)
			} else {
				this.callbacks.push({
					onResolved: (value) => {
						handle(onResolved)
					},
					onRejected: (reason) => {
						handle(onRejected)
					},
				})
			}
		})
	}

	Promise.prototype.catch = function (onRejected) {}

	Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })

  }

	Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

	Promise.all = function (promises) {}

	Promise.race = function (pormises) {}

	Promise.any = function (promises) {}

	window.Promise = Promise
})(window)
