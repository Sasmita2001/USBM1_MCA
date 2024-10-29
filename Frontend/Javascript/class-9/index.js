//Arrat method

//concatenation (merge)
//Ex:

// let fruits = ["apple", "orange", "strawbery"];
// let addarray=["mango", "litchi"];
// let addarray = fruits.concat("mango", "litchi");
// console.log(addarray);

//The include() method of array instances determines whether an array include a certain value among
//its entries returning true or false as appropriate

// let std = ["sasmita", "dikshya", "suchi", "monalisha"];
// let result = std.includes("suchi");
// console.log(result);

//slice()
// const fruit = ["apple", "orange", "strawbery", "mango", "banana"];
// const newarray = fruit.slice(1, 3);
// console.log(newarray);

//tosplice
const months = ["jan", "march", "april", "june"];
months.splice(3, 4, "sep"); //1=index.no where needed add 0=delete no(0)
console.log(months);

const letter = ["s", "a", "m", "i", "t", "e", "r", "y"];
letter.splice(4, 3, "k");
console.log(letter);

//forEach()
const array = ["1", "2", "3", "4"];
for (let i = 0; i < array.length; i++) {
  const double = array[i] * 2;
  array[i] = double;
}
// foreach()
array.forEach((result) => {
  console.log(result);
});
