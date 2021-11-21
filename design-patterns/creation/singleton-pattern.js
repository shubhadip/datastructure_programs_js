const singleObject = (function(){
  let obj;
  function SingleClass(){
    return {
      test: 'test'
    }
  };

  return {
    getInstance(){
      if(obj === null ){
        obj = new SingleClass();
        obj.constructor = null;
      }
      return obj
    }
  }

})();

const p = singleObject.getInstance();
const p1 = singleObject.getInstance();

console.log(p === p1)

