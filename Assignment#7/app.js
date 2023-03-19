
// ***CHAPTER 26 - 30 : MATH METHODS*** //

// QUESTION#1
// var num = +prompt("Enter a positive integer :");

// (a)
// document.write("number : " + num + "<br>")

// (b)
// document.write("round off value : " + Math.round(num) + "<br>")

// (c)
// document.write("floor value : " + Math.floor(num) + "<br>")

// (d)
// document.write("ceil value : " + Math.ceil(num) + "<br>")

// QUESTION#2
// var num = +prompt("Enter a negative floating point :");

// (a)
// document.write("number : " + num + "<br>")

// (b)
// document.write("round off value : " + Math.round(num) + "<br>")

// (c)
// document.write("floor value : " + Math.floor(num) + "<br>")

// (d)
// document.write("ceil value : " + Math.ceil(num) + "<br>")

// QUESTION#3
// var num = +prompt("Enter a number :");
// document.write("The absolute value of " + num + " is " + Math.abs(num))

// QUESTION#4
// var dice = Math.ceil(Math.random() * 6);
// document.write("random dice value : " + dice)

// QUESTION#5
// var coin = Math.ceil(Math.random() * 2);
// var answer;
// if (coin == 1) {
//     answer = "heads"
// } else {
//     answer = "tails"
// }
// document.write(coin + "<br> random coin value : " + answer)

// QUESTION#6
// var randomNumber = Math.ceil(Math.random() * 100);
// document.write("random number between 1 and 100 : " + randomNumber)

// QUESTION#8
// var secretNumber = Math.ceil(Math.random() * 10);
// var userInput = +prompt("Guess a number between 1 to 10 :");
// if (userInput == secretNumber) {
//     alert("Well Done !")
// } else {
//     alert("Try again !")
// }