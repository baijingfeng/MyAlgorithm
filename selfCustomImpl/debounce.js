function debounce(callback, delay) {
  return function () {
    const that = this
    const args = arguments

    if (callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }

    callback.timeoutId =  setTimeout(() => {
      callback.apply(that, args)
      delete callback.timeoutId
    })
    
  }
}