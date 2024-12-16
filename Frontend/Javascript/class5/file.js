//Q1. Write a program that calculates the sum of all digits of a given number using a loop.

// const readline = require("readline");
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// r1.question("Enter a number:", (input1) => {
//   let number = parseInt(input1);
//   let sum = 0;
//   while (number > 0) {
//     let rem = number % 10;
//     sum += rem;
//     number = Math.floor(number / 10);
//   }
//   console.log("The sum of the number is :" + sum);
// });

// // Q2. Print the Fibonacci series up to a given number of terms.

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let n,
//   n1 = 0,
//   n2 = 1,
//   nextTerm;

// rl.question("Enter the number of terms :", (input1) => {
//   n = parseInt(input1);
//   console.log("The Fibonacci series is :");
//   for (let i = 1; i <= n; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// });

// Q3. Write a program that prints the multiplication table of a number using a for loop.

// const readline = require("readline");
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let number, result;
// r1.question("Enter a number:", (input1) => {
//   number = parseInt(input1);
//   for (let i = 1; i <= 10; i++) {
//     result = i * number;
//     console.log(`${number}*${i}=${result}`);
//   }
//});

// Q4. Write a program that prints the first n prime numbers.

// let n = 10;
// let count = 0;
// let num = 2;
// while (count < n) {
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(num);
//     count++;
//   }
//   num++;
// }

// Print the follwing pattern
//1.

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

//2.

// for (let i = 5; i >= 1; i--) {
//   let pattern = "";
//   for (let j = i; j >= 1; j--) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

//3.

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";

//   for (let j = 1; j <= 5 - i; j++) {
//     pattern += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }

//4.

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";

//   for (let j = 1; j <= 5 - i; j++) {
//     pattern += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }

// for (let i = 5 - 1; i >= 1; i--) {
//   let pattern = "";

//   for (let j = 1; j <= 5 - i; j++) {
//     pattern += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }

//6. Floyd's Triangle: Print Floyd’s triangle using numbers

// let n = 5;
// let num = 1;
// for (let i = 1; i <= n; i++) {
//   pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += num + "";
//     num++;
//   }
//   console.log(pattern.trim());
// }
