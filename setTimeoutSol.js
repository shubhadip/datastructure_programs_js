let temp = [1,2,4,3];
for(var i =0; i < temp.length; i++) {
  (function(i){
    setTimeout(() => {
      console.log(temp[i]);
  }, 1000 - (i * 20));
  })(i);
};

temp = [1,2,4,3];
for(var i =0; i < temp.length; i++) {
  setTimeout(() => {
    console.log(temp[i]);
  }, 1000);
};


setTimeout(() => {
  console.log("B");
}, 0); // Q 

new Promise((res, rej) => {
  console.log("C");
  res("D");
}).then((val) => {
  console.log(val); // Q 
});

console.log("E");

