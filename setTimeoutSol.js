const temp = [1,2,4,3];
for(var i =0; i < temp.length; i++) {
  (function(i){
    setTimeout(() => {
      console.log(temp[i]);
  }, 1000 - (i * 20));
  })(i);
};

const temp = [1,2,4,3];
for(var i =0; i < temp.length; i++) {
  setTimeout(() => {
    console.log(temp[i]);
  }, 1000);
};

