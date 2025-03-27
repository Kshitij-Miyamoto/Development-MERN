console.log(a);
merafunc();
function merafunc(){
    console.log("Inside mera functions");
    
}
var a = 20 ; 

//This is basically hoisting in Var, where we get undefined

console.log(b);
merafunc();
function merafunc(){
    console.log("Inside mera functions");
    
}
let b = 20 ; 
