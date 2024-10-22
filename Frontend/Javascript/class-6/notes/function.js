//function

//Write a function to print your name:

// function printName() {
//   console.log(`My name is sasmita`);
// }
// printName(); //invoke or call

// function printName(name,age,city) {
//   console.log(`My name is ${name},I am ${age} years old ,and I live in ${city} `);
// }
// printName("sasmita",);

//return keyword
// function printName(name, age, city) {
//   return `my name is ${name} I am ${age} years old and i lived in ${city}`; //stop
//   console.log("I am stop");
// }
// let output = printName("sasmita", 22, "bbsr");
// console.log(output);
//console.log(printName("sasmita", 22, "bbsr"));// function call

//arrow function
//console.log(printName("sasmita"));
//=> fat arrow
const printName = (name) => {
  return `My name is ${name}`;
};
console.log(printName("sasmita"));
