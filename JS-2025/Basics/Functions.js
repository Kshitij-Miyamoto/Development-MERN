function greet(name){ //Here name is parameter
    return `Hi, ${name}` //local scope
}
result = greet("salman") //Here Salman is arguements
console.log(greet("kshitij"))  //Declared in global scope
console.log(result);

