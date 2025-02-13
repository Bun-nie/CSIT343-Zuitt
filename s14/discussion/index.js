// console.log("Hello World");

// [SECTION] For Loop
/*
	- For Loop is more flexible than a while and do-while loop;
		1. Initialization: value that will track the progression of the loop.
		2. expression/condition: evaluation to determine whether the loop will run one more time.
		3. finalExpression/iteration: indicates how the loop advances.
	- Syntax:
		for(initialization; expression/condition; iteration) {
			// statement
		}
*/

for (let count = 0; count <= 20; count++) {
	console.log("For Loop: " + count);
}

// [SECTION] For Loop with Strings

let myString ="alex";

// characters in string may be counted using the .length property.

console.log(myString.length);

// Accessing elements of a string
// First character in a string corresponds to the number 0;
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);
console.log(myString[4]);

// Create a loop that will print out the individual letters of myString variable.
// to get the last character of a string/array it will be string.length - 1
for (let x = 0; x < myString.length; x++) {
	console.log("Individual letters: " + myString[x]);
}

let myName = "AlEx";

/*
	Mini Activity (5 mins)
	1. Create a loop that prints each letter of myName variable individually.
		- If the letter is a vowel, print the number 3 instead.
	2. Use the '.tolowerCase()' method to convert the current letter to lowercase before evaluation.
	3. Take a screenshot of the output in the browser console and send it in the chat.
*/

for (let i = 0; i < myName.length; i++) {
  let letter = myName[i].toLowerCase();
  
  if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log(3);
  } else {
    console.log(letter);
  }
}


// [MINI ACTIVITY]
let myName = "AlEx";

for (let i = 0; i < myName.length; i++) {
    let letter = myName[i].toLowerCase();
    if ("aeiou".includes(letter)) {
        console.log(3);
    } else {
        console.log(myName[i]);
    }
}

// Another Solution
for(let i = 0; i < myName.length; i++) {
	// console.log(myName[i]. toLowerCase());
	if (
		myName[i].toLowerCase() == "a" || 
		myName[i].toLowerCase() == "e" || 
		myName[i].toLowerCase() == "i" || 
		myName[i].toLowerCase() == "o" || 
		myName[i].toLowerCase() == "u"
	){
		console.log(3);
	} else {
		console.log(myName[i]);
	}
}