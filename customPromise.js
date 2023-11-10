const STATES = {
    PENDING:'PENDING',
    FULLFILLED: 'FULLFILLED',
    REJECTED: 'REJECTED'
};

const isThenable = (valOrPromise) => valOrPromise && typeof valOrPromise.then === 'function'

class CustomPromise {

    constructor(callback) {

        this._state = STATES.PENDING;
        this._value;
        this._reason;
        this._thenQueue = [];
        this._finallyQueue = [];
        try {
            if(typeof callback === 'function') {

                setTimeout(() => {
                    callback(
                        this._onFulFilled.bind(this),
                        this._onRejected.bind(this)
                    )
                },0)
            }
        }catch(e) {
            console.log("cakked", e)
            this._onRejected(e);
        }
    }

    _propogateFulFilled() {
            this._thenQueue.forEach(e => {
                const [controlledPromise, fullFilledFn] = e;
                if(typeof fullFilledFn === 'function') {
                    let valOrPromise;
                    try{
                        valOrPromise = fullFilledFn(this._value);
                    }catch(e) {
                        controlledPromise._onRejected(e)
                    }
                    if(isThenable(valOrPromise)) {
                        valOrPromise.then(
                            val => controlledPromise._onFulFilled(val),
                            rea => controlledPromise._onRejected(rea)
                        )
                    }else {
                       controlledPromise._onFulFilled(valOrPromise);
                       
                    }
                }else {
                    return controlledPromise._onFulFilled(this._value);
                }
            })
        

        this._finallyQueue.forEach(e => {
            const [controlledPromise, sideEffect] = e;
            sideEffect();
            controlledPromise._onFulFilled(this._value)
        })
        this._thenQueue = []
        this._finallyQueue = []
    }

    _propogateRejected() {
        this._thenQueue.forEach(e => {
            const [controlledPromise, _, catchFn] = e;

            if(typeof catchFn === 'function') {
                let valOrPromise 
                try{
                    valOrPromise = catchFn(this._reason);
                }catch(e) {
                    controlledPromise._onRejected(e)
                }

                if(isThenable(valOrPromise)) {
                    valOrPromise.then(
                        val => controlledPromise._onFulFilled(val),
                        rea => controlledPromise._onRejected(rea)
                    )
                }else {
                    return controlledPromise._onFulFilled(this._reason)
                }

            }else {
                return controlledPromise._onRejected(this._reason)
            }
        }) 
        this._finallyQueue.forEach(e => {
            const [controlledPromise, sideEffect] = e;
            sideEffect();
            controlledPromise._onRejected(this._reason)
        })
        this._thenQueue = []
    }

    _onFulFilled(value) {
        if(this._state === STATES.PENDING) {
            this._value = value;
            this._state = STATES.FULLFILLED
            this._propogateFulFilled()
        }
        
    }

    _onRejected(reason) {
        if(this._state === STATES.PENDING) {
            this._reason = reason;
            this._state = STATES.REJECTED
            this._propogateRejected()
        }
    }


    then(fullFilledFn, catchFn) {
        const controlledPromise = new CustomPromise();
        this._thenQueue.push([controlledPromise, fullFilledFn, catchFn]);
        if(this._state === STATES.FULLFILLED) {
            this._propogateFulFilled()
        }else if(this._state === STATES.REJECTED) {
            this._propogateRejected()
        }
        return controlledPromise;
    }

    catch(catchFn) {
        return this.then(undefined, catchFn)
    }

    finally(sideEffect) {
        if(this._state !== STATES.PENDING) {
            sideEffect();
            return this._state === STATES.FULLFILLED ? CustomPromise.resolve(this._value) : CustomPromise.reject(this._reason);
        }

        const controlledPromise = new CustomPromise();
        this._finallyQueue.push([controlledPromise, sideEffect]);
        return controlledPromise;
    }
}
  

CustomPromise.resolve = value => new CustomPromise(resolve => resolve(value));
CustomPromise.reject = value => new CustomPromise((_, reject) => reject(value));

// const p = new CustomPromise((resolve, reject) => {
//     setTimeout(() => {
//       reject('rejected');
//     }, 1000);
//   });
  
//   p.then((val) => {
//     console.log(val);
//     return new CustomPromise((r) => {
//       setTimeout(() => {
//         r('nested promise');
//       }, 500);
//     });
//   }).then((r) => {
//     console.log(r);
//   });
  
//   p.catch((reason) => {
//     console.log(reason);
//     return new CustomPromise((r) => {
//       setTimeout(() => {
//         r('nested then');
//       }, 500);
//     });
//   }).then((r) => {
//     throw new Error("tesrs")
//   }).catch((e) => {
//     console.log('catched', e)
//   });

const p1 = new CustomPromise((resolve, reject) =>
  setTimeout(() => {
    resolve({ resolve: "p1 - 10" });
  }, 10)
);

const p2 = new CustomPromise((resolve, reject) =>
  setTimeout(() => {
    resolve({ resolve: "p2 - 100" });
  }, 100)
);

const p4 = new CustomPromise((resolve, reject) =>
  setTimeout(() => {
    resolve({ resolve: "p4 - 100" });
  }, 100)
);

const p3 = new CustomPromise((resolve, reject) =>
  setTimeout(() => {
    reject({ reject: "p3 - 3" });
  }, 50)
);

CustomPromise.allSettled = (promises) => {
    return new CustomPromise((resolve) => {
      const allSettled = [];
      promises.forEach((p) => {
        p.then((d) => {
          allSettled.push(d);
          if (allSettled.length === promises.length) {
            resolve(allSettled);
          }
        }).catch((r) => {
          allSettled.push(r);
          if (allSettled.length === promises.length) {
            resolve(allSettled);
          }
        });
      });
    });
  };
  
  CustomPromise.race = (promises) => {
    return new CustomPromise((resolve,reject) => {
        promises.forEach((p) => {
            p.then((r) => {
                resolve(r)
            })
            p.catch((r) => {
                reject(r)
            })
        })
            
    })
  }

CustomPromise.all = (promises) => {
    let output = new Array(promises.length);
    let counter = 0;
  
    return new Promise((resolve,reject) => {
      promises.forEach((element, index) => {
        element
          .then((value) => {
            output[index] = value;
            counter++;
            if (counter === promises.length) {
              // all promises resolved, resolve outer promise
              resolve(output);
            }
            // resolve(output)
          })
          .catch(reject)
      });
    });
  };
  
  CustomPromise.allSettled([p1,p2,p3])
    .then((o) => {
        console.log('allsettled', o);
    });

  
    CustomPromise.race([p1,p2,p3])
        .then((data) => console.log('race', data))
        .catch((e) => console.log('error race', e))

    CustomPromise.all([p1,p2,p4])
        .then((data) => console.log('all', data))
        .catch((e) => console.log('error all', e))

