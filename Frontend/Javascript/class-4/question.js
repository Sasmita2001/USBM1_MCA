//Exercise 1:Simple Calculator with a Loop
//let num1 = parseInt(prompt("Enter the first number"));
//let num2 = parseInt(prompt("Enter the second number"));

/*const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question(`Enter the first  number:`, (input1) => {
  let number = parseInt(input1);
});

//const readline = require("readline");
const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r2.question(`Enter the second  number:`, (input2) => {
  let number = parseInt(input2);
});

//let readline = require("readline");
const r3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r3.question(`Enter the operation like (+, -, *, /):`, (input3) => {
  let number = parseInt(input3);
});
let operation;
//let operation = parseInt(prompt("Enter your operation like (+, -, *, /)"));
switch (operation) {
  case "+":
    console.log("The sum is=", num1 + num2);
    break;

  case "-":
    console.log("The subtraction is=", num1 - num2);
    break;

  case "*":
    console.log("The multification is=", num1 * num2);
    break;

  case "/":
    console.log("The division is=", num1 / num2);
    break;
  case "%":
    console.log("The module is=", num1 % num2);
    break;

  default:
    console.log("Enter valid operation");
    break;
}*/

//Exercise 2: Guessing Game

let GuessNumber = Math.random();
let number = Math.ceil(GuessNumber);
while (true) {
  //let GuessNumber = parseInt(prompt("Enter your number:"));
  let GuessNumber;
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  r1.question(`Enter a number :`, (GuessNumber) => {
    let number = parseInt(GuessNumber);
  });
  if (GuessNumber == number) {
    console.log("you find the number...." + number);
    break;
  } else if (GuessNumber > number) {
    console.log("Your number is too small");
  } else if (GuessNumber < number) {
    console.log("Your number is too big");
  } else {
    console.log("oops! It is wrong number TRY AGAIN");
  }
}

//Exercise 3: Word Counter

// const readline = require("readline");
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// r1.question(`Enter the word :`, (input1) => {
//   let number = parseInt(input1);
// });

//Exercise 4: Login Attempt Limit
//Allow the user 3 login attempts. If they fail 3 times, show a lockout message.
/*const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question(`enter a number`, (input3) => {
  let number = parseInt(input3);
});*/
