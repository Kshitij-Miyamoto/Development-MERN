/* A closure in JavaScript is when a function remembers the variables from its outer scope
, even after the outer function has finished execution.*/


function outer() {
    let count = 0; // Variable inside outer scope

    function inner() {
        count++; // Inner function accesses 'count'
        console.log(count);
    }

    return inner; // Return the inner function
}

const counter = outer(); // 'outer' runs and returns 'inner'
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3



//Real life application, using a private variable
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log(`Withdrawn: ${amount}, New Balance: ${balance}`);
            }
        },
        checkBalance() {
            console.log(`Balance: ${balance}`);
        }
    };
}

const account = createBankAccount(1000);
account.deposit(500);  // Deposited: 500, New Balance: 1500
account.withdraw(200); // Withdrawn: 200, New Balance: 1300
account.checkBalance(); // Balance: 1300
console.log(account.balance); // ❌ Undefined (can't access directly)