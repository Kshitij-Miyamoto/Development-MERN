let object = {
    name : "Kshitij",
    age : 19,
    Mail : "kshitij.miyamoto@gmail.com",
    slogan : "Never out of the fight, never affected by the fight"
}
console.log(object);
console.log(object.name);
console.log(object.Mail);

function calculate(num1 , num2){
    let obj = {
        sum : num1 + num2,
        diff : num1 - num2,
        prod : num1 * num2,
        rem : num1 % num2,
    }
    return obj //So basically functions can return anything
}
console.log(calculate(20,10));

let newobject = object 
console.log(newobject.name); //Objects just like arrays are passed by refernce
newobject.name = "Kshitij Sharma"
console.log(object); //It is pass by refernce hence a reason for which the real object also changes.

//Functions which are stored or defined in an object are known as methods : 




