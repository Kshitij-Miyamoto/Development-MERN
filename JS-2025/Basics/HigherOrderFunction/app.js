function a(){
    console.log("inside a");
    function b(){
        console.log("inside b");
    }
    return b ;
}
let temp = a()
console.log(temp);

function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15