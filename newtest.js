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
