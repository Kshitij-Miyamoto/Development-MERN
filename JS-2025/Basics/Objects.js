//Objects in Depth !
/*n JavaScript, an object is a collection of key-value pairs, where keys are strings (or Symbols) 
and values can be any data type (including functions).
Objects allow you to group related data and behavior together.
*/

//object literal way of making objects
const sym = Symbol("Unique-Key")
let object = { name : "Kshitij Sharma" , Caste : "9-para-SF" , Philosphy : "Never out of the Fight", [sym] : 'balidaan' } ; 
console.log(object);
console.log(object.name);
console.log(object.Philosphy);
console.log(object.Caste);
console.log(object[sym]);//This very important syntax of Symbol, we wanted the key to be a symbol

console.log(typeof object); //bascially we can check the type of element if possible
console.log(typeof object.Caste); // We can also check the type of the object

//Using new Constructor function
function Person(name, age, regiment) {
    this.name = name;
    this.age = age;
    this.regiment = regiment;
  }
  
  let person1 = new Person("Alice", 30, "SAS");
  //printing the object as a whole
  console.log(person1);
  //Accessing a value form a key
  console.log(person1.name);
  //checking for property in the object
  console.log("name" in person1);
 //iterating over an object
  for (let key in object) {
    console.log(` ${key}: ${object[key]}`);
  }


  //Object method : 
console.log(Object.keys(object)); // ["name", "age"]
console.log(Object.values(object)); // ["Alice", 28]
console.log(Object.entries(object)); // [["name", "Alice"], ["age", 28]]

 //Spread for object :
 const obj1 = { a: 1 , b : 2 , c : 3} ; 
 const obj2 = { x : 10 , y : 20 , z : 30} ; 
 const newobj = {...obj1 , ...obj2}
 console.log(newobj); //Merged the objects with ease using the spread operation.


//Nested Objects
 let company = {
    name: "TechCorp",
    employees: {
      manager: { name: "Alice", age: 35 },
      developer: { name: "Bob", age: 28 },
    }
  };
  
  console.log(company.employees.manager.name); // Output: Alice
  console.log(company);
  let newobject = {...company} ; 
  console.log(newobject);
  
  //this function is calling the object here
  let user = {
    name: "John",
    greet: function() {
      console.log(`Hello, ${this.name}`);
    }
  };
  
  user.greet(); // Output: Hello, John

  //Objects in Objects :
  let SwiggyUser = {
    number : 9810377925 ,
    name : {Front_Name : "Kshitij"
             , Last_Name : "Sharma"}
  } ;
  console.log(SwiggyUser.name.Front_Name); // Output: Kshitij
  console.log(SwiggyUser.name.Last_Name); // Output: Sharma
  console.log(SwiggyUser);

  const target = {a: 1 , b: 2} ; 
  const source = {x : 10 , y: 20} ; 
  const returntarget = Object.assign(target , source) //Basically merging will happen
  console.log(returntarget); // {  a: 1, b: 2, x: 10, y: 20 }
  const ts = { ...target , ...source } //{  a: 1, b: 2, x: 10, y: 20 }
  console.log(ts);
  
  
      
  
 