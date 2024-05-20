// console.log("Hellow World");
// Datatypes in javascript :
// number, string,boolean,undefined,null,symbol,bigint
// Number.MAX_VALUE*10 = Infinity => everything holds true with infinty same like math

// Remember data types are of 2 types:
// Objects and primitive, primtive ones are the above ones.

// Operators:
//
/* 
remember :   

5 == '5' will retrun true since datatypes are not checked only value is 


but === will reeturn falso since even datatype and val is checked.
0, '', null, undefined, false, Nan = > falsy values
remember first falsy and then last truthy for && operator 
and reverse for || operator.
let user = undefined;
console.log(Number(user));
console.log(parseInt("false120"));

*/

// prompt syntax:
// let userip = prompt("Please enter your email");
// using functions with function keyword
// function greetUser() {
//   console.log("Hellow");
// }

// Array is heterogenous

// const arr = ["a", "b", 10, 20];
// console.log(arr);

// let cars = new Array("bmw", "VW");
// console.log(cars);
// const applies only to primitive datatypes
// const cities = ["Mumbai", "Delhi", "Kolkata", "Chennai"];
// cities.push("llll");
// push pushes it to the end of the array
// and unshift to the start of the array.
//  we have push(),unshift(),pop(),shift()
// all these 4 methods return length of the array once after their operation is carried out since even these are fucntion calls.

// indexOf("")=> returns index of that particular element in array and if it return -1 it implies that the element is not present in the array.

// includes => return true / false  if the particular element exists or not

// const str = "Hello";
// const splitStr = str.split("");

// const reverseStr = splitStr.reverse();
// const joinStr = reverseStr.join("");

// console.log(joinStr);
// function generateID(startValue) {
//   let counter = startValue;

//   return function () {
//     return "A_2023_" + counter++;
//   };
// }

// // Test cases
// const getID = generateID(2);
// console.log(getID()); // Output: A_2023_2
// console.log(getID()); // Output: A_2023_3

// const func = generateID(99);
// console.log(func()); // Output: A_2023_99
// console.log(func()); // Output: A_2023_100
/* Functions in JS */

// const sum1 = sum(5, 6);
// //console.log(sum1);

// //Function Declaration
// function sum(a, b) {
//   return a + b;
// }

// // Function expression
// var sum2 = function (a, b) {
//   return a + b;
// };

// //console.log(sum2(1, 8));

// //Arrow function
// var prod = (num1, num2) => num1 * num2;
// //console.log(prod(2, 4));

// //IIFE (Immediately Invoked Function Expression )
// (function (a, b) {
//   console.log(a ** b);
// })(4, 2);

// const user = (function () {
//   const userData = {
//     userName: "John",
//     userAge: 20,
//   };

//   function getName() {
//     console.log(userData.userName);
//   }

//   function updateAge(age) {
//     console.log(userData.userAge + age);
//   }

//   return { getName, updateAge };
// })();

// console.log(user);
// console.log(user.userData);
// user.getName();
// user.updateAge(3);
