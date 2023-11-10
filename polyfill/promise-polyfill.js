
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
    promises.forEach(p => {
        p.then(r => {
          resolve(r)
        })
        p.catch(r => {
          reject(r)
        })
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

const p1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve({ resolve: "10" });
  }, 10)
);

const p2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve({ resolve: "100" });
  }, 100)
);

const p3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject({ reject: "3" });
  }, 50)
);
// Promise.race([p1, p2, p3])
//   .then((resp) => {
//     console.log("resp", resp);
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });

const myRace = () => {
  return new Promise((resolve, reject) => {
    const allSettled = [];
    [p2, p1, p3].forEach((p) => {
      p.then((d) => {
        allSettled.push(d);
        if (allSettled.length === 3) {
          resolve(allSettled);
        }
      }).catch((r) => {
        allSettled.push(r);
        if (allSettled.length === 3) {
          resolve(allSettled);
        }
      });
    });
  });
};

myRace().then((o) => {
  console.log(o);
});




function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = (sc) => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

function ploadScript(src){
  new Promise((resolve, reject) => {
    const scriptTag = document.createElement('script');

    scriptTag.src = 'https://www.google.com';
    scriptTag.onload = () => resolve(scriptTag);
    scriptTag.onerror = () => reject(new Error('adad'));
    document.body.append(scriptTag)
  })
}