//Arrays in JS
let fruits = ["Apple", "Banana", "Cherry"]; // Array of strings
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let mixed = ["Hello", 42, true]; // Mixed data types

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits.length); // 3 (number of elements)

//Javascript elements are resizeable
fruits.push("Grapes"); // Adds to the end
fruits.unshift("Orange"); // Adds to the beginning
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
console.log(fruits);

//slicing and splicing 
let sliced = fruits.slice(1, 3); // Extracts part of the array
fruits.splice(1, 1, "Pineapple"); // Removes 1 element at index 1 & adds "Pineapple"
fruits.sort(); //sorts the array alphabetically
console.log(fruits);
console.log(fruits.includes("Mango")); // false
console.log(numbers.indexOf(3)); // 2 (index of 3)

//Array Methods : 
let Kshitij = [ "Developer" , "Philospher" , "Soldier" , "Aham"] ; 
Kshitij.push("9-paraSF")
console.log(Kshitij);
//if we try to push an array in array we end up with nested arrays rather use concat
let newarray = Kshitij.concat(fruits) ; 
console.log(newarray); //so basically we will have to ave the result in a new array


for( i = 0 ; i < Kshitij.length ; i++){
    console.log(`At index ${i} , ${Kshitij[i]}`);
}
//join() method
const arr = Kshitij.join() ;
console.log(arr); //type of this arr = "String"
console.log(Kshitij)
console.log(typeof arr);

// Slicing and Splicing
const newarr = Kshitij.slice(0, 3); // 0 , 1st and 2nd index is printed respectively
console.log(newarr);
console.log(Kshitij);
Kshitij.splice(1,1,  "1-para");
console.log(Kshitij); //oiginal array gets changed


//In splice the original array is changed

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matrix[1][2]); // 6

  //Spread operator :
  const saluarray = [...Kshitij, ...fruits, ...matrix]
  console.log(saluarray);
  const matrixspread = [ ...matrix] ;
  console.log(matrixspread);
  
  //Another array 
  const another_array = [1, 2, 3 [1, 3, 5 [7 , 9 , 10]]]
  console.log(another_array);

  const real_another_array = another_array.flat(infinity)
  console.log(real_another_array);
  
  

  
  




