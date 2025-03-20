let mydate = new Date() ;
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(typeof mydate); //this is basically an object 
let mycreatedDate = new Date("20-03-2025");
console.log(mycreatedDate.getTime()); //return NAN

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getTime());
newdate.toLocaleString("default" , {
    weekday: long
})






