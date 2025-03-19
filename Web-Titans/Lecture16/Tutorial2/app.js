// let obj = {
//     naam : "Baba Bengali",
//     kaam : "Vashikaran",
//     number : 81781884220
// }

//Syntax of a function
// function fun(){
//     console.log("Hello World");
//     return 1 ;
// }
//Calling of a function
// fun();

//Function is a reusable piece of code and always returns something.
// function Pun(){
//     console.log("I am in CB");
//     return "Salu"
// }
//fn calling
// let retval1 = fun();
// let retval2 = Pun();
// console.log(retval1);
// console.log(retval2);
//Undefined is returned by default, it is a valid value and it is given by JS


//as we are accepting parameter this is known as parameterized function
// function square(baba){
//     return baba*baba
// }
// console.log(square(6));

// let out = square(5)
// console.log(out);

/*Here in the below example a is pointing towards 5, but we have nothing to materialise b, 
hence the it will yield undefined and ultimately NaaN as an output */

// function add(a = 100 , b = 420){
//     return a + b 
// }
// let out = add(5)
// console.log(typeof out);
// console.log(out);

// let karsakteho = function(){
//     console.log(" I am coding blocks ");
// }
// karsakteho(){

// }

// What are first class function ? 
// What functions are called first class ?

let obj = {
    naam : "baba bengali",
    kaam : "Vashikaran",
    number : 8178188334 ,

    baba : function(){
        console.log("main hu gian");
    }
}
console.log(obj.number);
console.log(obj.kaam);
console.log(obj.baba);
console.log(10);