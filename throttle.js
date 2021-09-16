const throttle = (func, time = 100) => {
  let timeout;
    
  return () => {
    const next = () => {
      func.apply(this,args)
      clearTimeout(timeout);
    };

    if(!timeout) {
      timeout = setTimeout(next ,time)
    }
  }
  
}