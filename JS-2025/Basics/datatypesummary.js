/* Datatypes are divided into two parts, i.e Primitive and non primitive,
Primitive datatypes are basically of 7 types ;
String, number, boolean, null, undefined, symbol, BigInt
All these are call by values, work is done upon the copy */
const score = 10 ; 
const value = 10.4 ; 
const isLoggedIn = true ; 
const Outsidetemp = null ; 

console.log(score);
console.log(value);
console.log(isLoggedIn);
console.log(Outsidetemp);

//Reference not primitive 
let arr = [10, 20, 30 , 40] ; 
for( i = 0 ; i < arr.length ; i++){
    console.log(arr[i]) ; 
}

const myfunction = function(){
    console.log("Hello World");
    
}
