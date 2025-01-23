console.log("Hello World!");
console.log("This is our first JS session!") //no need semicolon because of ASI

// Comments
// 	ctrl + /
// 	to describe the written codes
// 	Documentation:
// 		code readability
// 		maintainability
// 		collaboration

/*
	These are two types of comments:
	1. single-line comments denoted by two slashes
	2. multi-line commnets denoted by a slash and asterisk (ctrl + shift + /)
*/

console.log("Nicole");

// Variables
	// to contain data within a program.

	let myName = "Nicole"; // Variable Declaration w/ Initialization
	console.log(myName);

	// Variable Declaration
	let newVariable;
	console.log(newVariable);

	// Assignment Operator (=) to assign/reassign a value
	let myPet = "Bantay";
	console.log(myPet);

	// ReferenceError - not defined, cannot access specific variable, called before its initialization
	// console.log(hello);
	// let hello;

	// Correct - declare variable first before using it
	// let hello;
	// console.log(hello);

	// No error if using var - variable hoisting
	console.log(hello);
	var hello = "Greeting"; // altho undefined, no value