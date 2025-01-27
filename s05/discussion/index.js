console.log("Hello World!");

// [SECTION] Arithmetic Operators
let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of addition operator: " + product);

let quotient = x / y;
console.log("Result of addition operator: " + quotient);

// [SECTION] Assignment Operator (=)
// assignment operator assigns the value of right operand to a variable.
let assignmentNumber = 8;

// Addition Assignment Operator
// adds the value of the right operand to a variable and assigns the result to the variable
assignmentNumber = assignmentNumber + 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Shorthand for assignmentNumber
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// -=, *=, /=
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

// [SECTION] Increment and Decrement (++/--)
// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decrement was applied
let z = 1;

let increment = ++z; // pre-increment - increments before returning value of z
console.log("Pre-increment: " + increment);
console.log("Pre-increment z-value: " + z);

increment = z++; // returns value of z, increments after
console.log("Post-increment: " + increment);
console.log("Post-increment z-value: " + z);

let decrement = --z; // pre-decrement - decrements before returning value of z
console.log("Pre-decrement: " + decrement);
console.log("Pre-decrement z-value: " + z);

decrement = z--; // returns value of z, decrements after
console.log("Post-decrement: " + decrement);
console.log("Post-decrement z-value: " + z);