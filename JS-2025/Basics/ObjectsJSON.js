//Object destructuring adn JSON : Object destructuring is a concise way to extract values from objects into variables.

const user = {
    name: "Kshitij",
    age: 22,
    city: "Delhi"
  };
  
  // Destructuring assignment
  const { name, age } = user;
  
  console.log(name); // Output: Kshitij
  console.log(age);  // Output: 22



/*Data is stored in key-value pairs.
Keys must be strings (unlike JS objects where they can be symbols).
Supports strings, numbers, booleans, arrays, objects, and null.
No functions or undefined values.
*/

 /* {
    "name": "Kshitij",
    "age": 22,
    "languages": ["JavaScript", "Python"],
    "isActive": true
  }
    */

  const jsonData = '{"name":"Alice","age":25}';

//Parsing in JSON
const obj0 = JSON.parse(jsonData);

console.log(obj.name);


//COnversion
const obj1 = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);

console.log(jsonString); // Output: {"name":"Alice","age":25}