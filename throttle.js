const throttle = (func, time = 100) => {
  let timeout;
    
  return (...args) => {

    if(!timeout) {
      timeout = setTimeout(() => {
        func(...args)
        clearTimeout(timeout)
      }
      ,time)
    }
  }
  
}