// https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

// 1.1 Primitive to boolean
// Primitives are coerced to boolean when using logical operators (the last evaluated operand is returned from each expression).


// 1.2 Primitive to string
// Primitives are coerced to string when using the binary + operator — if any operand is a string.

// 1.3 Primitive to number
// Primitives are coerced to number when using comparison operators …and arithmetic operators (except for + when one operand is a string)



// 2.1 Object to boolean
// Objects are coerced to boolean when using logical operators. Objects always resolve to true.

// 2.2 & 2.3 Object to string and number



// 3.1 Symbol to boolean
// Symbols are treated as true when it comes to boolean coercion.

// 3.2 Symbol to string
// Symbols can’t be implicitly coerced to string.

// 3.3 Symbol to number
// Symbols can’t be implicitly or explicitly coerced to number.