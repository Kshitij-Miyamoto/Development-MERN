
function createCounter() {
    let count = 0;  // This variable is enclosed within the closure

    function getCount() {
        return count;
    }

    function increment() {
        count = count + 1;
        return count;
    }

    function decrement() {
        count =  count - 1;
        return count;
    }

    function reset() {
        count = 0;
        return count;
    }

    return {
        f1: getCount,
        f2: decrement,
        f3: increment,
        f4: reset
    };
}

const counter = createCounter();

console.log(counter.f1()); // Output: 0
console.log(counter.f3()); // Output: 1 (increment by 1)
console.log(counter.f3()); // Output: 2 (increment by 1)
console.log(counter.f2()); // Output: 1 (decrement by 1)
console.log(counter.f4()); // Output: 0 (reset to 0)
console.log(counter.f1()); // Output: 0 (get current count)