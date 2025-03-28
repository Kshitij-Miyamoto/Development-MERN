function a(){
    console.log("inside a");
    function b(){
        console.log("inside b");
    }
    return b ;
}
let temp = a()
console.log(temp);
