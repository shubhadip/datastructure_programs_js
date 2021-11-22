const pubsub = require("./pubsub");

module.exports = {
  publishEvent(){
    pubsub.publish('eventA', {
      data: 'I am from eventA'
    })
  }
}