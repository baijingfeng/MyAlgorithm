/**
 * 函数节流
 * 1. 理解:
 * 		在函数需要频繁触发时: 函数执行一次后,只有大于设定的周期后才会执行第二次
 * 		适合多次事件按时间做平均分配触发
 * 2. 场景:
 * 		窗口调整(resize)
 * 		页面滚动(scroll)
 * 		DOM元素的拖拽功能实现(mousemove)
 * 		抢购疯狂点击(mousedown)
 * @param {*} callback
 * @param {*} delay
 */
/** 实现节流函数, throttle */
function throttle(callback, delay) {
	let last = 0
	return function () {
		console.log('throttle 事件...')
		const now = Date.now()
		if (now - last > delay) {
			callback.apply(this, arguments)
			last = now
		}
	}
}

/**
 * 函数防抖
 * 1. 理解:
 * 		在函数需要频繁触发时: 在规定的时间内, 只让最后一次生效, 前面的不生效
 * 		适合多次事件一次响应的情况
 * 2. 场景
 * 		实时搜索联想(keyup)
 * 		文本输入的验证(连续输入文字后发送AJAX请求进行验证, 验证一次就好)
 * 		判断scroll是否滑到底部, 滚动事件+函数防抖
 * @param {*} callback
 * @param {*} delay
 */

/** 实现防抖函数, debounce */
function debounce(callback, delay) {
	return function () {
		console.log('debounce 事件...')
		// 保存this和arguments
		const that = this
		const args = arguments
		// 清除之前执行的定时器任务
		if (callback.timeoutId) {
			clearTimeout(callback.timeoutId)
		}
		// 每隔delay时间, 启动一个新的延迟定时器, 去准备调用callback
		callback.timeoutId = setTimeout(() => {
			callback.apply(that, args)
			// 如果定时器回调执行了, 删除标记
			delete callback.timeoutId
		}, delay)
	}
}
