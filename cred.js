// applySpec(): Given a specification object that
// recursively maps properties to functions,
// applySpec takes in this specification object and
// returns a function that when called with some arguments
// produces an object of the same structure.

// For Eg:

const getMetrics = applySpec({
  sum: (a, b, c = 9) => a + b + c, // sum is called with (2, 4)
  sub: (a, b) => a - b, // sub is called with (2, 4)
  nested: {
    mul: (a, b) => a * b // mul is called with (2, 4)
  },
  nested2: {
    nested3: {
      cube: (a, b) => a * a * a * b * b * b // mul is called with (2, 4)
    }
  }
});

function applySpec(specObj) {
  return function () {
    let op = {};
    Object.keys(specObj).forEach((item) => {
      if (typeof specObj[item] === "function") {
        const answer = specObj[item].call(this, ...arguments);
        op = { ...op, ...{ [item]: answer } };
      } else {
        const data = {
          [item]: applySpec(specObj[item]).call(
            this,
            ...arguments
          )
        };
        op = { ...op, ...data };
      }
    });
    return op;
  };
}

console.log(getMetrics(2, 4, 3)); // => { sum: 6, nested: { mul: 8 } }
console.log(getMetrics(3, 6)); // => { sum: 9, nested: { mul: 18 } }
