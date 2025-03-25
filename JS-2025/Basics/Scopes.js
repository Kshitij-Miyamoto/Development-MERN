let a = 10  //This can be understood as the global scope
let b = 10
console.log(a+b);

function sum(a , b){
    return a + b  //This is the local scope, scope of the sum function
}
console.log(sum(10,20));
