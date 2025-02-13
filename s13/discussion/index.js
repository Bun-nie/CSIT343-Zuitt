// console.log("Hello World!");

// [SECTION] while loop
/*
	- A while loop takes an expression/condition
	- "Iteration" the term given to the repetition of statements
	- Syntax:
		while(expression/condition){
			// statements
		}
*/

let count = 5;

while (count !== 0){
	console.log("While: " + count);
	count--;
}


// [SECTION] Do-While Loop
/*
	- do-while loop works a lot like the while loop
	- do-while guaranteethat the code will be executed at least once
	- Syntax:
		do {
			// statement
		} while (expression/condition)
*/

function demoDoWhile(number) {
	do {
		console.log("Do-While: " + number);
		number
	} while (number < 10);
}

demoDoWhile(1);
demoDoWhile(10);

// [MINI ACTIVITY]
/*
function printOddNumbers(limit) {
    let num = 10;
    
    while (num >= 1) {
        console.log(num);
        
        num -= (num % 2 === 0) ? 1 : 2;
    }
    
    console.log("Done!");
}

printOddNumbers(10);
*/