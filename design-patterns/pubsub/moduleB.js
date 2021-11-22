const pubsub = require("./pubsub");

let subs;

subs = pubsub.subscribe('eventA', (data) => {
  console.log('received ' , data );
  subs.unsub();
})