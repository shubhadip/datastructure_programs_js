Array.prototype.myReduce = function(fn, intialValue){
  const dataArray = this;
  dataArray.forEach((item) => {
    intialValue = intialValue != undefined ? fn(intialValue, item) : item;
  })
  return intialValue;
};

console.log('reduce',[[1],[2],[3]].myReduce((a,b) => a.concat(b)),[])

Array.prototype.myMap = function(fn, initialValue = []) {
  console.log(this.valueOf());
  const dataArray = this;
  dataArray.forEach((item) => {
    initialValue.push(fn(item));
  })
  return initialValue
}

console.log('map',[1,2,3].myMap((a) => a*2))
