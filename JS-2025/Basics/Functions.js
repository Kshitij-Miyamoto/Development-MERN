function greet(name){ //Here name is parameter
    return `Hi, ${name}` //local scope
}
result = greet("salman") //Here Salman is arguements
console.log(greet("kshitij"))  //Declared in global scope
console.log(result);

function CalculateCartPrice(val1 , val2, ...num1){
  return num1 
}
console.log(CalculateCartPrice(2));
console.log(CalculateCartPrice(200 , 300, 500 , 400)); //Now we need to pass more than one values, we use REST operstor ...num1

const user = {
       username : "Kshitij" , 
       price : 200

}

//Basically padding an object in a function
function handledObject(anyobject){
 return anyobject
}

console.log(handledObject(user));

//Now passing an array in a function to return the value at the fist index : 
const newarr = [10, 20, 30, 40, 50]
function returnarray(myarray){
    return myarray[1] ; 
}
console.log(returnarray(newarr));

let func = function iphone(){
    console.log("Kshitij's Iphone !! ")
}
console.log(func)


