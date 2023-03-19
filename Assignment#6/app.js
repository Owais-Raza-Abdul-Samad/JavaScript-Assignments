
// ***CHAPTER # 21 - 25 : STRING METHODS*** //

// QUESTION#1
// var firstName = prompt("Enter your first name :");
// var lastName = prompt("Enter your last name :");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + " !");

// QUESTION#2
// var phoneModel = prompt("Enter your favourite phone model :");
// var len = phoneModel.length;
// document.write("My favourite phone model is : " + phoneModel + "<br>"); 
// document.write("Length of string : " + len); 

// QUESTION#3
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("String : " + str + "<br>");
// document.write("Index of 'n' : " + n);

// QUESTION#4
// var str = "Hello World";
// var lastL = str.lastIndexOf("l");
// document.write("String : " + str + "<br>");
// document.write("Last index of 'l' : " + lastL);

// QUESTION#5
// var str = "Pakistani";
// var char = str.charAt(3);
// document.write("String : " + str + "<br>");
// document.write("Character at index 3 : " + char);

// QUESTION#6
// var firstName = prompt("Enter your first name :");
// var lastName = prompt("Enter your last name :");
// var fullName = firstName.concat(" ", lastName)
// alert("Hello " + fullName + " !");

// QUESTION#7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder","Islam");
// document.write("City : " + city + "<br>");
// document.write("After replacement : " + newCity);

// QUESTION#8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and","&");
// document.write("Message : " + message + "<br>");
// document.write("After replacement : " + newMessage);

// QUESTION#9
// var value1 = "472";
// var type1 = typeof value1;
// document.write("Value : " + value1 + "<br>");
// document.write("Type : " + type1 + "<br>");
// var value2 = +value1
// var type2 = typeof value2;
// document.write("Value : " + value2 + "<br>");
// document.write("Type : " + type2 + "<br>");

// QUESTION#10
// var userInput = prompt("Enter a word :");
// document.write("User input : " + userInput + "<br>");
// var newStr = userInput.toUpperCase();
// document.write("Upper case : " + newStr + "<br>");

// QUESTION#11
// var userInput = "javascript";
// var first = userInput[0].toUpperCase();
// var second = userInput.slice(1);
// var result = first + second;
// document.write("User input : " + userInput + "<br>");
// document.write("Title case : " + result + "<br>");

// QUESTION#12
// var num = 35.36;
// var str = num.toString();
// var newStr = str.slice(0,2) + str.slice(3);
// document.write("Number : " + num + "<br>");
// document.write("Result : " + newStr);

// QUESTION#13
// var username = prompt("Enter your username :");
// for (var i = 0; i < username.length; i++) {
//     if (username[i].charCodeAt() == 33 || username[i].charCodeAt() == 44 || username[i].charCodeAt() == 46 || username[i].charCodeAt() == 64) {
//         alert("Enter a valid username");
//         break;
//     }
// }

// QUESTION#14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am ? ");
// var search = userInput.toLowerCase();
// var found = false;
// for (var i = 0; i < a.length; i++) {
//     if (search == a[i]) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(userInput + " is availible at index " + i + " in our bakery");
// } else {
//     alert("We are sorry. " + userInput + " is not avalible in our bakery");
// }

// QUESTION#15
// var password = prompt("Enter your password :")
// document.write("Entered password : " + password + "<br>");
        //  (a)
// var a = false;
// for (var i = 0; i < password.length; i++) {
//     console.log(password[i],password[i].charCodeAt())            // <--- test
//     if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57 || password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
//         a = true;
//         console.log(a)              // <--- test
//     } else {
//         a = false
//         break;
//     }
// }
// if (a == false) {
//     document.write("Password should only contain letters and numbers. <br> Please enter a valid password");
// }
        //  (b)
// if (password[0].charCodeAt() >= 48 && password[0].charCodeAt() <= 57) {
//     document.write("Password should not start with a number. <br> Please enter a valid password");
// }
        //  (c)
// if (password.length < 6) {
//     document.write("Password should at least be 6 characters long. <br> Please enter a valid password");
// }

// QUESTION#16
// var university = "University of Karachi";
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")
// }

// QUESTION#17
// var userInput = prompt("Enter a word :");
// var char = userInput.charAt(userInput.length - 1);
// document.write("User input : " + userInput + "<br>");
// document.write("Last character of input : " + char);

// QUESTION#18
// var str = "The quick brown fox jumps over the lazy dog";
// var counter = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 3) == "The" || str.slice(i, i + 3) == "the") {
//         counter++
//     }
// }
// document.write("Text : " + str + "<br>");
// document.write("There are " + counter + " occurence(s) of the word 'the'");

// ***END*** //