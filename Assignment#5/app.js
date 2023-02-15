
// ***CHAPTER # 14 - 16 : ARRAYS*** //

// QUESTION#1
// var emptyArray = [];

// QUESTION#2
// var studentsNames = new Array();

// QUESTION#3
// var stringArray = ["a","b","c"];

// QUESTION#4
// var numArray = [1,2,3];

//QUESTION#5
// var booleanArray = [true,false];

// QUESTION#6
// var mixArray = ["abc", 123, true];

// QUESTION#7
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write ("1) " + qualifications[0] + "<br>");
// document.write ("2) " + qualifications[1] + "<br>");
// document.write ("3) " + qualifications[2] + "<br>");
// document.write ("4) " + qualifications[3] + "<br>");
// document.write ("5) " + qualifications[4] + "<br>");
// document.write ("6) " + qualifications[5] + "<br>");
// document.write ("7) " + qualifications[6] + "<br>");
// document.write ("8) " + qualifications[7]);

// QUESTION#8
// var studentsNames = ["Michael", "John", "Tony"];
// var score = [250, 200, 150];
// var totalMarks = 500;
// var percentage = score / totalMarks * 100;
// document.write("Score of " + studentsNames[0] + " is " + score[0] + ". Percentage: " + score[0] / totalMarks * 100 + "% <br>");
// document.write("Score of " + studentsNames[1] + " is " + score[1] + ". Percentage: " + score[1] / totalMarks * 100 + "% <br>");
// document.write("Score of " + studentsNames[2] + " is " + score[2] + ". Percentage: " + score[2] / totalMarks * 100 + "%");

// QUESTION#9
// var colors = ["red", "green", "blue"];
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (a)
// var colorStart = prompt("Enter the color you want to the beginning :");
// colors.unshift (colorStart);
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (b)
// var colorEnd = prompt("Enter the color you want to the end :");
// colors.push (colorEnd);
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (c)
// colors.unshift ("gold","silver");
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (d)
// colors.shift();
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (e)
// colors.pop();
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (f)
// var colorAddIndex = +prompt("Enter the desired index of color :");
// var colorAddName = prompt("Enter the name of color :");
// colors.splice (colorIndex, 0, colorName);
// document.write("Colors : " + colors + "<br>");

// QUESTION#9 (g)
// var colorDeleteIndex = +prompt("Enter the desired index of color :");
// var colorDeleteQuantity = +prompt("Enter the Quantity of colors to be deleted :");
// colors.splice (colorDeleteIndex, colorDeleteQuantity);
// document.write("Colors : " + colors + "<br>");

// QUESTION#10 
// var scores = [320, 230, 480, 120];
// document.write("Scores of Students : " + scores + "<br>");
// scores.sort();
// document.write("Ordered scores of Students : " + scores);

// QUESTION#11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: <br>" + cities + "<br>");
// var selectedCities = cities.slice(2,4);
// document.write("Selected cities list: <br>" + selectedCities);

// QUESTION#12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>" + arr + "<br>");
// document.write("String: <br>" + arr.join(" ") + "<br>");

// QUESTION#13
// var devices = [];
// devices.unshift ("keyboard");
// devices.unshift ("mouse");
// devices.unshift ("printer");
// devices.unshift ("monitor");
// document.write ("Devices : <br>" + devices + "<br>");
// var out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");
// out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");
// out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");
// out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");

// QUESTION#14
// var devices = [];
// devices.push ("keyboard");
// devices.push ("mouse");
// devices.push ("printer");
// devices.push ("monitor");
// document.write ("Devices : <br>" + devices + "<br>");
// var out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");
// out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");
// out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");
// out = devices.pop();
// document.write ("Out : <br>" + out + "<br>");

// QUESTION#15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<form>")
// document.write("<label>Phone Manufactures : </label>");
// document.write("<select>");
// document.write("<option>" + phone[0] + "</option>");
// document.write("<option>" + phone[1] + "</option>");
// document.write("<option>" + phone[2] + "</option>");
// document.write("<option>" + phone[3] + "</option>");
// document.write("<option>" + phone[4] + "</option>");
// document.write("<option>" + phone[5] + "</option>");
// document.write("</select>");
// document.write("</form>");

//--------------------------------------------------------------------------------------------------------------//

// ***CHAPTER # 17 - 20 : ARRAYS AND LOOP*** //

// QUESTION#1
// var multiArray = [[], [], []];

// QUESTION#2
// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(arr)                // <=== test

// QUESTION#3
// for (var i = 1; i <= 10; i++ ) {
//     document.write(i + "<br>")
// }

// QUESTION#4
// var tableNum = +prompt("Enter a number for multiplication :");
// var tableLength = +prompt("Enter the length of the table :");
// for (var i = 1; i <= tableLength; i++) {
//     var result = tableNum * i;
//     document.write(tableNum + " x " + i + " = " + result + "<br>");
// }

// QUESTION#5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br><br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// QUESTION#6 (a)
// document.write("<h4>Counting :</h4>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// QUESTION#6 (b)
// document.write("<h4>Reverse counting :</h4>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// QUESTION#6 (c)
// document.write("<h4>Even :</h4>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");   
// }

// QUESTION#6 (d)
// document.write("<h4>Odd :</h4>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");   
// }

// QUESTION#6 (e)
// document.write("<h4>Series :</h4>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");   
// }

// QUESTION#7
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery! \n What do you want to order :");
// var matchFound = false;
// for (var i = 0; i < a.length; i++) {
//     if (search === a[i]) {
//         matchFound = true;
//         alert(search + " is availible at index " + i + " in our bakery");
//         break;
//     }
// }
// if (matchFound === false) {
//     alert(search + " is not availible in our bakery");
// }

// QUESTION#8

// var a = [24, 53, 78, 91, 12];
// document.write("Array items: " + a + "<br>");
// a.sort();
// var largestNum = a.length - 1;
// document.write("The largest number is " + a[largestNum]);

// QUESTION#9
// var a = [24, 53, 78, 91, 12];
// document.write("Array items: " + a + "<br>");
// a.sort();
// document.write("The smallest number is " + a[0]);

// QUESTION#10
// var result = 0; 
// for (var i = 1; i <= 20; i++) {
//     result = (i * 5);
//     console.log(result);
// }