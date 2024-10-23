// function greetings(name, time) {
//   if (time <= 12 && time >= 6) {
//     console.log(`Good morning`);
//   } else if (time >= 12 && time <= 6) {
//     console.log(`Hey ${name}good afternoon `);
//   } else if (time >= 7) {
//     console.log(`hey${name}Good night`);
//   }
// }
// greetings("sasmita", 10);

// const greeting = (name, hour) => {
//   if (hour < 12) {
//     return `Good Morning ${name}`;
//   } else if (hour < 18) {
//     return `Good Afternoon ${name}`;
//   } else {
//     return `Good Evening ${name}`;
//   }
// };
// const output = greeting("sasmita", 19);
// console.log(output);

//Example

// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//       break;

//     case "-":
//       return a - b;
//       break;

//     case "*":
//       return a * b;
//       break;
//     case "/":
//       return a / b;
//       break;

//     case "%":
//       return a % b;
//       break;
//     default:
//       return "Invalid operator";
//       break;
//   }
// };

// const output = calculator(45, 3, "-");
// console.log(output);

//Ternary operator

// const add = (a, b) => console.log(add(5, 6));
// add();
// const add = (a, b) => a + b;
// console.log(add(5, 3));

//To print BIM calculator

// const BMI = (weight, height) => {
//   return weight / (height * height);
// };
// const output = BMI(43, 5.1);
// console.log(output.toFixed(2));

// const printNumbers = (...numbers) => {
//   return numbers;
// };

// let output = printNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(output);

//callback function

//When a function is called as an argument in an another fuction .

// functionName(num,callback){
//     return` my name ${name}`;
//     return callback;
// }

// function Hello() {
//   return "Hello";
// }

//to do :Make a user authentcation  system using call back
//passeord validation

const authentcation = (enterDate, callback) => {
  return callback(enterDate);
};

// const verify = (userData) => {
//   let user = "user";
//   let admin = "admin";
//   if (userData == user) {
//     return "He is a user";
//   } else if (userData == admin) {
//     return "He is a user";
//   } else {
//     return "He is not authorized person";
//   }
// };

// console.log(authentcation("sasmita", verify));

//Asynchronus
// if error happens in line 1 it will stop execution and switch to the next line

// setTimeout(() => {
//   code;
// });
// setInterval(() => {
//   code;
// });

setTimeout(() => {
  console.log("Hey usbm");
}, 5000);

setInterval(() => {
  console.log("Hey sasmita");
}, 1000);
