// console.log("Hello World.");

// [SECTION] JS Type Coercion
// automatically changes one value type to another.

let numA = '10';
let numB = 12;

/*
	- Add/concatenate a string and a number, it will result as a string.
*/
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

coercion = numA * numB;
console.log(coercion);
console.log(typeof coercion);

/*
	- Adding a boolean to a number, will result to anumber.
	- true is change to value of 1
*/
let coercionTrue = true + 1;
console.log(coercionTrue);
console.log(typeof coercionTrue);

/*
	- Adding a boolean to a number, will result to anumber.
	- false is change to value of 0
*/
let coercionFalse = false + 1;
console.log(coercionTrue);
console.log(typeof coercionFalse);

// Arrays (and objects) are compared by reference (memory addres), not by the value. 
let coercionObj = [] == [];
console.log("coercionObj: " +coercionObj);

// [SECTION] Comparison Operators

// Strict Equality Operator (===)
/*
	- Checks whether the operands are equal and have same content.
	- also COMPARES the data types of 2 values.
*/

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);

// Strict Inequality Operator (!==)
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);

// [SECTION] Comparison Operator (>, <, >=, <=)
// checks one value if greater or less than to the other values

let a = 50;
let b = 65;

// Greater than operator
let isGreaterThan = a > b;
// Less than operator
let isLessThan = a < b;
// Greater than or equal operator
let isGTorEqual = a >= b;
// Less thant or equal operator
let isLTorEqual = a <= b;

console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLTorEqual);

let numStr = "50";
console.log(a >= numStr); //true - forced coercion to change string to a number
console.log(b <= numStr); // false - 65 is not less than or equal to 50.

let str = "twenty";
console.log(b >= str); //false
// Since the string is not numeric, it will be converted to a number and it will result to NaN (Not a Number). is 65 greater than NaN.
// NaN - result of unsuccessful conversion from String to number of an alphanumeric string.
console.log(b * str);

// [SECTION] Logical Operators
let isLegalAge = true;
let isRegistered = false;

// Logical AND operator (&&)
// returns true if all operands are true
let allRequimentsMet = isLegalAge && isRegistered;
console.log("Result of logical AND Operator: " +allRequimentsMet);

// Logical OR operator (||)
// returns true if one of the operands are true.
let someRequirementsMet = isLegalAge || isRegistered;
console.log("Result of logical OR operator: " +someRequirementsMet);

// Logical Not Operator (!)
let someRequirementsNotMet = !isRegistered;
console.log("Result of logical NOT Operator: " +someRequirementsNotMet);