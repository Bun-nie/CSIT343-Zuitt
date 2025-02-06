//console.log("Hello World!");
/*
    
    1. Create a function called greet.
        - The function should accept one parameter: name.
        - The function should return a string that says hello to the name provided.
        - Return the result of the string and log the returned value.
        
        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.
*/

function greet(name) {
	return "Hello " + name;
}

let greetMe = greet("John");
console.log(greetMe);
  
/*     
    2. Create a function called printMessage.
        - The function should accept one parameter: message.
        - Return the provided message.
        - Call the function three times with different messages and log the returned values.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.
*/

function printMessage(message) {
	return message;
}

let message1 = printMessage("First message");
let message2 = printMessage("Second message");
let message3 = printMessage("Third message");

console.log(message1);
console.log(message2);
console.log(message3);

/*
    3. Create a function called getSquare.
        - The function should accept one parameter: num.
        - Return the square of the number.
        - Call the function with a number and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.
*/

function getSquare(num) {
	return num*num;
}

let square = getSquare(2);
console.log(square);

/*
    4. Create a function called double.
        - The function should accept one parameter: num.
        - Return the number multiplied by 2.
        - Call the function with a number and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.
*/

function double(num) {
	return num*2;
}

let doubleNum = double(2);
console.log(doubleNum);

/*
    5. Create a function called addTen.
        - The function should accept one parameter: num.
        - Return the result of adding 10 to the number.
        - Call the function with a number and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.
*/

function addTen(num) {
	return num+10;
}

let sum = addTen(2);
console.log(sum);

/*
    6. Create a function called printLine.
        - The function should accept one parameter: line.
        - Return the string "You entered: [line]".
        - Call the function with a string and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.
*/

function printLine(line) {
	return "You entered: " + line;
}

let line1 = printLine("Functions are great!");
console.log(line1);