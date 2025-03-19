//set timeout(cb, delay)

//setTimeout(function(){}, 5000);

let iddd = setTimeout(()=>{
    console.log("Hi there ")
} , 5000);
clearTimeout(iddd);

//setInterval(cb , gao)
let id = setInterval(()=>{
  console.log("2sec...")
} , 2000)

console.log('Start');

setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);

console.log('End');