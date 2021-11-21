function Subject(){
  this.observers = [];
}


Subject.prototype = {
  sub: function(fn){
    this.observers.push(fn);
  },
  unsub: function(fn){
    this.observers = this.observers.filter((ob) => ob != fn);
  },
  trigger: function(data){
    this.observers.forEach((ob) => {
      ob.call(this, data);
    })
  }
}

const s1 = new Subject();

function Observer1(data){
  console.log('observer 1 called', data)
}

function Observer2(data){
  console.log('observer 2 called', data)
}

function Observer3(data){
  console.log('observer 3 called', data) 
}

s1.sub(Observer1);
s1.sub(Observer2);
s1.sub(Observer3);

s1.trigger('latest-data');

s1.unsub(Observer3);

s1.trigger('latest-data1');

s1.unsub(Observer2);

s1.trigger('latest-data2');




const SingleObject = (function(){
  let instance;

  function privateFn(){
    return {
      test: 'test',
    };
  }

  return {
    getInstance: function(){
      if(instance === undefined){
        instance = new privateFn();
      }
      return instance;
    }
  }
})();

const s11 = SingleObject.getInstance()
const s22 = SingleObject.getInstance()


console.log(s11 === s22);



const v1 = function(name){
  this.name = name;
  this.t1 = 'T1';
}

const v2 = function(name){
  this.name = name;
  this.t1 = 'T2';
}


const v = function(){
  this.create = function(p, details){
    switch(p) {
      case 'T1': 
        return new v1( details);
      case 'T2': 
        return new v2( details);
    }
  }
}

function vcall(){
  console.log('i called '+ this.name)
}

const vobj = new v();
const vobj1 = vobj.create('T1', 'shubh');
const vobj2 = vobj.create('T2', 'deep');

vcall.call(vobj1);
vcall.call(vobj2);
