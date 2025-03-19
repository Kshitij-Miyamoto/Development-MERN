// let arr = [1 ,2,3]

// let obj = {
//     a:10,
//     b: "sam"
// }

// for(let item of arr){
//     console.log(item); //every element 1-1
// }

//for in (object)
// for(let item in obj){
//     console.log(item);
//     console.log(obj.item);
// }


// For in object
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key); // Logs "a", "b", "c"
}

//For of object
const arr = [1, 2, 3];

for (let value of arr) {
  console.log(value); // Logs "1", "2", "3"
};
console.log();
