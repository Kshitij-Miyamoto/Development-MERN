
console.log("start");

let id = setInterval(function(){
    console.log("tun tun mause")
} , 0)

clearInterval(id)
console.log("end");

console.log("start");
setTimeout(function(){
    console.log("tun tun mausi");
}, 1000)
setTimeout(function(){
    console.log("chutki sang bheem");
}, 2000)
setTimeout(function(){
    console.log("indumati sang bheem");
}, 2000)
console.log("end");