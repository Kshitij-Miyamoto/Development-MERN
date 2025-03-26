///Compares both value and type.
//No type conversion occurs.
//Returns true only if both operands are exactly the same.
//Strict Equality "==="
console.log(5 === "5"); // false (number !== string)
console.log(5 === 5);   // true (same type and value)
console.log(null === undefined); // false (different types)
console.log(true === 1); // false (boolean !== number)


// General Equality ==
//Compares only values.
//Performs type conversion (also called "type coercion") before comparison.
//Can lead to unexpected results due to implicit conversions.
//Empty array will typecast into an empty string 
console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(null == undefined); // true (special case)
console.log(true == 1); // true (true is coerced to 1)
console.log(0 == false); // true (false is coerced to 0)


//use === by default.
//Use == only when necessary (like checking null == undefined).

console.log(10/0);
console.log(-10/0)
console.log(typeof(10/0))
console.log(typeof(-10/0))
console.log(typeof(0/0))

//Here the type can be anything : from a number, to infinity/-infinity