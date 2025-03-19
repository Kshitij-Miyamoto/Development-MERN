/* WORKING OF MEMORY IN JS : 
Stack Memory (Primitive Data Types)
Stack is used for storing primitive data types like number, string, boolean, undefined, null, symbol, and BigInt.
When a variable is declared with one of these types, memory is allocated on the stack.
Fixed size: The size is determined at compile time.
*/
let x = 10;  // 'x' is a primitive type (number), stored in the stack

/*Heap Memory (Objects and Arrays)
Heap is used for storing reference types such as objects, arrays, and functions.
These types are dynamic in nature, meaning their size is determined at runtime, so they are stored in the heap.
A reference to the object is stored in the stack, but the actual data is in the heap.
Example: */
let arr = [1, 2, 3];  // 'arr' is a reference type (array), stored in the heap

/*Garbage Collection :JavaScript uses automatic garbage collection to manage memory.
 The JavaScript engine periodically checks for variables or objects that are no longer 
 needed (i.e., objects that are not referenced anymore) and frees up that memory.
How Garbage Collection Works:
Reference Counting: When an object is no longer referenced, it is considered unreachable and is marked for deletion.
Mark and Sweep: The garbage collector "marks" all the variables that are still in use, then "sweeps" away those that
 are not referenced anymore. */

 //pass by value 
 let a = 5;
 function changeValue(x) {
     x = 10;
 }
 changeValue(a);
 console.log(a); // 5, 'a' is unchanged because it's passed by value
  
 //pass by reference
 let obj = {name: "John"};
 function changeName(o) {
     o.name = "Doe";
 }
 changeName(obj);
 console.log(obj.name); // "Doe", 'obj' is modified because it's passed by reference