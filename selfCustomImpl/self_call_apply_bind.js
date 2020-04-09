/** 自定义实现call() */
Function.prototype.call = function(obj) {
  const [obj, ...args]=arguments
  obj.tempFn = this // 将当前函数临时保存在obj对象上
  obj.tempFn(args) // 方法执行(当前函数执行), 内部this是obj
  delete obj.tempFn // 删除属性
}

/** 自定义实现apply() */
Function.prototype.call = function (obj, args) {
	obj.tempFn = this // 将当前函数临时保存在obj对象上
	obj.tempFn(args) // 方法执行(当前函数执行), 内部this是obj
	delete obj.tempFn // 删除属性
}

/** 自定义实现bind() */
Function.prototype.bind = function(obj) {
  obj = obj || window
  const args = []

  // arguments: 调用bind函数时传递的实参伪数组, 需要从第二个开始, 都保存在args中
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i])
    }
  }

  const self = this

  return function() {// 返回新函数, 内部执行fn, 而且指定this为obj
    if (arguments.length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
      }
    }

    self.apply(obj, args)
  }
}