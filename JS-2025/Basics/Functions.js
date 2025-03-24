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

function handledObject(anyobject){
    
}
