function axios({url, method = 'GET', params = {}, data = {}}) {
	method = method || 'GET'
	method = method.toUpperCase()

	// 将params中的参数拼接到url后边
	let queryStr = ''
	Object.keys(params).forEach((key) => {
		queryStr += '&' + key + '=' + params[key]
	})

	if (queryStr) {
		queryStr = queryStr.substring(1)
		url += '?' + queryStr
	}

	return new Promise((resolve, reject) => {
		// 创建XHR对象
		const request = new XMLHttpRequest()

		// 打开连接,初始化请求对象
		request.open(method, url, true)

		// 设置响应数据类型 ==> 自动解析json文本为js对象/数组, 保存给response属性上
		request.responseType = 'json'

		// 绑定监视request的状态改变的监听
		request.onreadystatechange = function() {
			
			// 如果请求还没有完成,直接结束
			if (request.readyState !== 4) {
				return 
			} 

			const {status} = request
			// 如果成功了, 取出数据封装成功的响应数据对象response, 调用resolce(response)
			if (status >= 200 && status < 300) { // 
				const response = {
					data: request.response,
					status,
					statusText
				}
				resolve(response)
			} else {
				reject(new Error('request error status is' + status))
			}

			// 如果失败了, 封装失败相关信息成error对象, 调用reject(error)
		}

		if (method === 'GET' || method === 'DELETE') {
			// 发送请求
			request.send(null)
		} else {
			// POST 或者 PUT
			//设置请求头
			request.setRequestHeader('Content-type', 'application/json;charset=utf-8')
			// 发送请求
			request.send(JSON.stringify(data))
		}
	})
}
