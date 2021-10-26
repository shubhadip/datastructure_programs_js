// let animal = {
//   eats: true,
//   walk(){
//     console.log('I am walking');
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };


// // rabbit.__proto__ = animal;
// rabbit.walk()

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// console.log(longEar.jumps)

// console.log(longEar.eats)

// animal has methods
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();

// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); 



let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach );