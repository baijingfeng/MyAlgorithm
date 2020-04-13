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
