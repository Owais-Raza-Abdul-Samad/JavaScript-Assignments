
// ***CHAPTER 9 - 11 : PROMPTS - COMPARISON OPERATORS*** //

// QUESTION#1
// var city = prompt ("Enter your city :");
// if (city === "Karachi") {
//     alert ("Welcome to city of lights")
// }

// QUESTION#2
// var gender = prompt ("Enter your gender :");
// if (gender === "male" ) {
//     alert ("Good Morning Sir")
// }
// if (gender === "female" ) {
//     alert ("Good Morning Ma'am")
// }

// QUESTION#3
// var signalColor = prompt ("Enter the color of the signal :");
// var message;
// if (signalColor === "Red") {
//     message = "Must Stop"
// }
// if (signalColor === "Yellow") {
//     message = "Ready to move"
// }
// if (signalColor === "Green") {
//     message = "Move now"
// }
// alert (message);

// QUESTION#4
// var remainingFuel = +prompt ("Enter the amount of remaing fuel :");
// if (remainingFuel < 0.25) {
//     alert ("Please refill the fuel in your car")
// }

// QUESTION#5 (a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// ( *message displayed* )

// QUESTION#5 (b)
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// ( *message not displayed* )

// QUESTION#5 (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// ( *Only condition 2 and 4 is true* )

// QUESTION#5 (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// ( *message will be displayed* )

// QUESTION#5 (e)
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// ( *message displayed will be true* )

// QUESTION#5 (f)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// ( *message will be displayed* )

// QUESTION#6
// var marksInSubject1 = +prompt("Enter marks obtained in first subject :");
// var marksInSubject2 = +prompt("Enter marks obtained in second subject :");
// var marksInSubject3 = +prompt("Enter marks obtained in third subject :");
// var totalMarks = +prompt("Enter total marks :");
// var percentageInSubject1 = marksInSubject1 / totalMarks * 100;
// var percentageInSubject2 = marksInSubject2 / totalMarks * 100;
// var percentageInSubject3 = marksInSubject3 / totalMarks * 100;
// var grade;
// var remarks;
// document.write ("Total marks : " + totalMarks + "<br>");
// document.write ("Marks obtained in First subject : " + marksInSubject1 + "<br>");
// document.write ("Percentage : " + percentageInSubject1 + "<br>");

// if (percentageInSubject1 >= 80) {
//     grade = "A-one"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Excellent"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject1 >= 70 && percentageInSubject1 < 80) {
//     grade = "A"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Good"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject1 >= 60 && percentageInSubject1 < 70) {
//     grade = "B"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "You need to improve"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject1 < 60) {
//     grade = "Fail"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Sorry"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// document.write ("Total marks : " + totalMarks + "<br>");
// document.write ("Marks obtained in Second subject : " + marksInSubject2 + "<br>");
// document.write ("Percentage : " + percentageInSubject2 + "<br>");

// if (percentageInSubject2 >= 80) {
//     grade = "A-one"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Excellent"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject2 >= 70 && percentageInSubject2 < 80) {
//     grade = "A"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Good"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject2 >= 60 && percentageInSubject2 < 70) {
//     grade = "B"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "You need to improve"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject2 < 60) {
//     grade = "Fail"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Sorry"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// document.write ("Total marks : " + totalMarks + "<br>");
// document.write ("Marks obtained in Third subject : " + marksInSubject3 + "<br>");
// document.write ("Percentage : " + percentageInSubject3 + "<br>");

// if (percentageInSubject3 >= 80) {
//     grade = "A-one"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Excellent"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject3 >= 70 && percentageInSubject3 < 80) {
//     grade = "A"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Good"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject3 >= 60 && percentageInSubject3 < 70) {
//     grade = "B"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "You need to improve"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }
// if (percentageInSubject3 < 60) {
//     grade = "Fail"
//     document.write ("Grade : " + grade + "<br>");
//     remarks = "Sorry"
//     document.write ("Remarks : " + remarks + "<br><br>");
// }

// QUESTION#7
// var secretNumber = 5;
// var guessedNumber = +prompt("Guess the secret number :");

// QUESTION#7 (a)
// if (guessedNumber === secretNumber) {
//     alert("Bingo! Correct answer");
// }

// QUESTION#7 (b)
// if (guessedNumber === ++secretNumber) {
//     alert("Close enough to the correct answer");
// }

// QUESTION#8
// var num = +prompt("Enter a number :");
// num = num % 3;
// if (num === 0) {
//     alert("The number is divisible by 3");
// }

// QUESTION#9
// var num = +prompt("Enter a number");
// num = num % 2;
// if (num === 0) {
//     alert("The given number is even");
// }
// if (num !== 0) {
//     alert("The given number is odd");
// }

// QUESTION#10
// var T = +prompt("Enter the temperature :");
// var result;

// QUESTION#10 (a)
// if (T > 40) {
//     result = "It's too hot outside";
// }

// QUESTION#10 (b)
// if (T > 30 && T <= 40) {
//     result = "The Weather today is Normal";
// }

// QUESTION#10 (c)
// if (T > 20 && T <= 30) {
//     result = "Today's Weather is cool";
// }

// QUESTION#10 (d)
// if (T > 10 && T <= 20) {
//     result = "OMG! Today's weather is so Cool";
// }
// alert(result);

// QUESTION#11
// var num1 = +prompt("Enter the first number :");
// var operator = prompt("Enter a operator : \n [ + - * / % ]");
// var num2 = +prompt("Enter the second number :");
// var result;
// if (operator === "+") {
//     result = num1 + num2
// }
// if (operator === "-") {
//     result = num1 - num2
// }
// if (operator === "*") {
//     result = num1 * num2
// }
// if (operator === "/") {
//     result = num1 / num2
// }
// if (operator === "%") {
//     result = num1 % num2
// }
// alert("The answer is : " + result);

// ***END*** //

//-----------------------------------------------------------------------------------------//

// ***CHAPTER 12 - 13 : IF...ELSE AND ELSE IF STATEMENT - TESTING SETS OF CONDITIONS*** //

// QUESTION#1
// var char = prompt("Enter a character :");
// var charCode = char.charCodeAt(0);
// if (charCode >= 65 && charCode <= 90) {
//   alert("uppercase letter");
// } else if (charCode >= 97 && charCode <= 122) {
//   alert("lowercase letter");
// } else {
//   alert("number");
// }

// QUESTION#2
// var num1 = +prompt("Enter the first integer :");
// var num2 = +prompt("Enter the second integer :");
// if (num1 > num2) {
//     alert(num1);
// } else if (num1 < num2) {
//     alert(num2);
// } else {
//     alert("They are equal")
// }

// QUESTION#3
// var num = +prompt("Enter a number :");
// if (num > 0) {
//     alert("The number is positive");
// } else if (num < 0) {
//     alert("The number is negative");
// } else {
//     alert("The number is zero");
// }

// QUESTION#4
// var char = "a";
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     alert(true);
// } else {
//     alert(false);
// }

// QUESTION#5 (a)
// var password = "javascript";

// QUESTION#5 (b)
// var userPassword = prompt("Enter your password :");

// QUESTION#5 (c)
// if (userPassword === "javascript") {
//     alert("Correct! The password you entered matches the original password");
// } else if (userPassword !== "javascript" && userPassword !== "") {
//     alert("Incorrect password");
// } else {
//     alert("Please enter your password");
// }

// QUESTION#6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// QUESTION#7
// var time = +prompt ("Enter the time in 24hr format :");
// var message;
// if (time >= 0000 && time < 1200) {
//     message = "Good Morning!";
// } else if (time >= 1200 && time < 1700) {
//     message = "Good afternoon!";
// } else if (time >= 1700 && time < 2100) {
//     message = "Good evening!";
// } else if (time >= 2100 && time <= 2359) {
//     message = "Good night!";
// } else {
//     message = "Good Morning!";
// }
// alert(message);

// ***END*** //