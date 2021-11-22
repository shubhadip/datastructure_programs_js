let subscribers = {};
module.exports = {

  subscribe(eventName, callback){
    let index;
    if (!subscribers[eventName]) {
      subscribers[eventName] = [];
    }

    index = subscribers[eventName].push(callback) - 1;

    return {
      unsub() {
        subscribers[eventName].splice(index, 1)
      }
    }
  },

  publish(eventName, data){
    if(!subscribers[eventName]) return
    subscribers[eventName].forEach(subsCallback => {
      subsCallback(data)
    });
  },

}