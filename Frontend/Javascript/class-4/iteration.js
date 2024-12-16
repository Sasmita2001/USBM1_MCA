Iteration :

// Print from 1 to 10;
// let start_num = 1;
// let next_num1 = start_num + 1;
// let next_num2 = start_num + 1;
// let end_num = 10;
// console.log(start_num);
// console.log(end_num);
// console.log(next_num2);
// let num = 2;
// console.log(num);
// console.log(num);
// console.log(num);

// While loop :

// syntax:
// while (condition) {
// code to be executed
// }


// Ex: Print from 1 to 10;

let num = 1; // declartion
console.log("Global:", num);

while (num <= 10) {
  console.log("Block:", num);
  num++;
}

console.log("Global:", num);

/*let num=1;
console.log("Global:",num);

while(num<=10){
    console.log("Block:",num);
    num++
}

console.log("Global",num);*/

let userAns;
do {
  userAns = prompt("What is the capital of odisha");
  // console.log("Wrong");
} while (userAns !== "Bhubaneswar");
console.log("correct");
