//copying array
let numbers = [1, 2, 3];
let copiedNumbers = [...numbers];  // Creates a new array with the same values
console.log(copiedNumbers); // [1, 2, 3]
//As pass by reference, so we need a new array. 

//Merging arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];  
console.log(merged); // [1, 2, 3, 4, 5, 6]

//Add elements to an array 
let fruits = ["Apple", "Banana"];
let newFruits = ["Orange", ...fruits, "Mango"];
console.log(newFruits); // ["Orange", "Apple", "Banana", "Mango"]

//copying an object 
let obj = { Name : "John", Age : 19 , Regiment : "9-Para" , Status : "Mumukshu"};
console.log(obj);
let copyobj = {...obj} ; 
console.log(copyobj);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

let person = { name: "Alice", age: 30 };
let updatedPerson = { ...person, age: 35 }; 
console.log(updatedPerson); // { name: "Alice", age: 35 }

//Passing Array Elements as array
function sum(a, b, c) {
    return a + b + c;
  }
  
  let nums = [10, 20, 30];
  console.log(sum(...nums)); // 60

//Spread with strings : 
let word = "Hello";
let letters = [...word];
console.log(letters);

/* Spread operator is basically used to  merge to arrays cleanly
Passing array elements as arguments, Converting strings to arrays */

function multiplication(a, b, c){
    return a*b*c ;
}
let num = [10, 20 , 30];
console.log(multiplication(...num));



