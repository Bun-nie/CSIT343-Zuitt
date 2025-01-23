console.log("Hello World, it's me again!");

// Best practices in naming variables

// 1. Descriptive - have specific insight of what the variable stores
let movieTitle = "The Godfather"; // good variable name
let x = "aiah"; // bad variable name

// 2. Start with a lowercase letter
let LastName = "Smith"; // bad variable name - PascalCase (usually used for classes and/or constructors)
console.log(LastName);
let lastName = "Smith";

// 3. Do not add spaces to your variable names. Use specific naming convention (camelCase or snake_case or kebab-case)
// let first name = "Mike"; // bad variable name

let firstName = "Mike"; // camelCase
let email_address = "mikesmith@gmail.com"; // snake_case

// 4. Avoid using a variable with a reserve keyword
// let new = "New Addition"; // cannot use 'new' since considered as reserved keyword
// console.log(new);

// Using the "=" or assignment operator
// - we can reassign a value to variables created using let
let productName = "desktop computer";
productName = "Alienware Aurora";
console.log(productName);

// - allows us to declare variables without initial value, then add value later
let productPrice = 120000;
console.log(productPrice);

// const - should not be changed
const interest = 3.539;
// interest = 4.489; // results to TypeError
console.log(interest);

// Data Types
// 1. String - create texts
let myString = "";
let province = "Metro Manila";
let country = "Philippines";

console.log(province);
console.log(country);

// 2. Numbers
// Integers/Whole Numbers
let myNumber = 0;
let headCount = 26;
console.log(headCount);

// Decimal Numbers/Fractions/Exponential
let grade = 98.7
console.log(grade);

// 3. Boolean
// True or False
let isMarried = false;
let isGoodConduct = true;
console.log(isMarried);
console.log(isGoodConduct);

// null - intentionally empty
let spouse = null;
console.log(spouse);

// undefined - declared but was not assigned with an initial value
let fullName;
console.log(fullName);

// Array
// special type of data
// store collection of values, and each value in an array associated with a numeric index
// can store different data types but is normally used to store similar data types
let person =  ["Nicole", 18, true, "Cebu City"]; // not recommended to store different data types, but possible
console.log(person);

// grouping similar data types
let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);

// Objects
// this special kind of data type that is used to mimic real world objects/items
// to create complex data that contains pieces of information that are relevant to each other

/*let/const objectName = {
	propertyA: value,
	propertyB: value
}
*/

let person1 = {
	name: "Nicole Ejares",
	age: 35,
	isMarried: false,
	contact: ["09123456789", "0987654321"],
	address: {
		houseNumber: '345',
		city: 'Cebu City'
	}
}
console.log(person);

// useful for creating abstract objects
let myGrades = {
	firstGrading: 98.7,
	secondGrading: 97.7,
	thirdGrading: 96.7,
	fourthGrading: 95.7,
}
console.log(myGrades);