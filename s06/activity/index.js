// console.log("Hello World!");

/*
    4. Debug the following code to return the correct value and mimic the output.
        - Check the value’s data type. Re-assign values if needed.
        - Check the if the operator used is correct.
*/


    let password = "gonpachiro";
    let confirmPassword = "gonpachiro";

    //Research the use of .length property
    let isCorrectLength = password.length >= 8;

    console.log("Is the password's length correct?");
    console.log(isCorrectLength);


	let match = password === confirmPassword;

    console.log("Do the passwords match?");
    console.log(match);


    let modulo = 11;
	modulo %= 3
	console.log("Updated modulo variable value:");
	console.log(modulo);

	let product = 6;
	product *= 4;
	console.log("Updated product variable value:");
	console.log(product);

	let quotient = 24;
	quotient /= 3;
	console.log("Updated quotient variable value:");
	console.log(quotient);

/*
    5. Given the values below, calculate convert the temperature from celsius to fahrenheit and save the result in a variable called resultFahrenheit.
        - Log the value of the variable in the console.
*/
    let tempCelsius = 132;
    let resultFahrenheit = (tempCelsius * 9) / 5 + 32;

	console.log("132 degrees Celsius when converted to Fahrenheit is: ");
	console.log(resultFahrenheit);

/*

    6. Given the values below, identify if the values of the following variable are divisible by 8.
    - Use a modulo operator to identify the divisibility of the number to 8.
    - Save the result of the operation in a variable called remainder1.
    - Log the value of the remainder in the console.
    - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy8
    - Log a message in the console if num7 is divisible by 8.

*/
    let num7 = 165;
    let remainder1 = num7 % 8;
	console.log("The remainder of 165 divided by 8 is: " + remainder1);
    //Log the value of the remainder1 in the console.

    console.log("Is num7 divisible by 8?");
    let isDivisibleBy8 = remainder1 === 0;
    console.log(isDivisibleBy8);
    //Log the value of isDivisibleBy8 in the console.


/*
    7. Given the values below, identify if the values of the following variable are divisible by 4.
    - Use a modulo operator to identify the divisibility of the number to 4.
    - Save the result of the operation in a variable called remainder1.
    - Log the value of the remainder2 in the console.
    - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy4
    - Log a message in the console if num8 is divisible by 4.

*/
    let num8 = 348;
    let remainder2 = num8 % 4;
    console.log("The remainder of 348 divided by 4 is: " + remainder2);
    //Log the value of the remainder2 in the console.

    console.log("Is num8 divisible by 4?");
    let isDivisibleBy4 = remainder2 === 0;
    console.log(isDivisibleBy4);
    //Log the value of isDivisibleBy4 in the console.


/* 
    8. Given the values below, calculate the average and identify if the average score is greater than 75.
        - Create a new variable called, "average".
        - Calculate the average of the group scores and save it in the average variable.
        - Log the value of average variable.
        - Create a new variable called isPassing.
        - Using a relational operator, display if the average score is greater than 75.
        - Log the value of the isPassing variable.

*/

    let groupA_score = 75;
    let groupB_score = 80;
    let groupC_score = 76;
    let groupD_score = 74;

    let average = (groupA_score + groupB_score + groupC_score +groupD_score)/4;

    //Log the value of the average in the console.
    console.log("Average score of the group:");
    console.log(average);

    //Log the value of the average in the console.
    let isPassing = average > 75;
    console.log("Average score of the group is greater than 75?");
    console.log(isPassing);

/*

9. Given the values below, calculate the total number of minutes in a year and save the result in a variable called resultMinutes.
    - Log the result in the console.

*/
    let minutesHour = 60;
    let hoursDay = 24;
    let daysYear = 365;
    let resultMinutes = 60*24*365;
    console.log("The number of minutes in year:");
    console.log(resultMinutes);