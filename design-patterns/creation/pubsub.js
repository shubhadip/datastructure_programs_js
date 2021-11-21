function PubSub(){
  let subscribers = [];
  
  function publish(eventName, data){
    if(!subscribers[eventName]) {
      return
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  };

  function subscribe(eventName, callback){
    if(!subscribers[eventName]) {
      subscribers[eventName] = [];
    };
    subscribers[eventName].push(callback);
  };

  return {
    publish,
    subscribe
  }
};