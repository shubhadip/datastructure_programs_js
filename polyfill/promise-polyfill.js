
// https://iamabhilash.medium.com/javascript-promise-method-polyfills-a4a41623df1a


const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'promise1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'promise2');
});

const promises = [promise1, promise2];

function race(promises){
  return new Promise((resolve,reject) => {
    promises.forEach(element => {
      Promise.resolve(element)
        .then(resolve)
        .catch(reject)
    });
  });
};

race(promises).then((data) => console.log('race', data))




function all(promises){
  var output = new Array(promises.length);
  const counter = 0;

  return new Promise((resolve,reject) => {
    promises.forEach((element, index) => {
      Promise.resolve(element)
        .then((value) => {
          output[index] = value;
          counter++;
          if (counter === promises.length) {
            // all promises resolved, resolve outer promise
            resolve(output);
          }
          resolve(output)
        })
        .catch(reject)
    });
  });
};

// race(promises).then((data) => console.log('race', data))


// import { promiseAll } from 'promiseAll'; // implementation of promise.all from above
// function promiseAllSettled(promisesArray) {
//   var wrappedPromises = promisesArray.map(
//     p => Promise.resolve(p)
//         .then(value => ({ status: 'fulfilled', value }))
//         .catch(reason => ({ status: 'rejected', reason }))
//   );
//   return promiseAll(wrappedPromises); // i:e; Promise.all(wrappedPromises);
// }


function promisify(f) {
  return function(...args){
    return new Promise((resolve, reject) => {
      function callback(err, result){
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      };
      args.push(callback);
      f.call(this, ...args)
    })
  }
}

function promiseFirst(promises) {
  return new Promise((resolve,reject) => {
    promises.forEach((ele) => {
      Promise.resolve(ele)
        .then(resolve)

    })
  })
}