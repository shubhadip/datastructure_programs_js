function Subject() {
    this.observers = [];
};

Subject.prototype = {
  subscribe: function(fn){
    this.observers.push(fn)
  },
  unsubscribe: function(fnToRemove){
    this.observers = this.observers.filter((i) => i !== fnToRemove);
  },
  trigger: function(){
    this.observers.forEach((fn) =>{
      fn.call(this,'data')
    });
  }
}

const subject1 = new Subject();

function Observer1(props){
  console.log('Observer 1 firing', props);
}
subject1.subscribe(Observer1);

function Observer3(props){
  console.log('Observer 2 firing', props);
}
subject1.subscribe(Observer3);

function Observer2(props){
  console.log('Observer 3 firing', props);
}
subject1.subscribe(Observer2);

subject1.trigger()