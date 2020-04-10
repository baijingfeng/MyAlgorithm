;(function (window) {
	class Promise {
		constructor(excutor) {}

		then(onResolved, onRejected) {}

		catch(onRejected) {}
		static resolve(value) {}

		static reject(reason) {}

		static all(promises) {}

		static race(pormises) {}

		static any(promises) {}
	}
	window.Promise = Promise
})(window)
