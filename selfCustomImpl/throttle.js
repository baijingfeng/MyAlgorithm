export function throttle(callback, delay) {
	return function () {
		let last = 0
		const now = Date.now()
		if (now - last >= delay) {
      console.log('throttle 事件...')
			callback.apply(this, arguments)
			last = now
		}
	}
}
