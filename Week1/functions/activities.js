
// Activity 1:
// Take this code and turn it into arrow function 
// syntax:

const factorial = (n) => {
    if((n===0) || (n===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

// Activity 2:
// Edit the below snippet to include two parameters and a JS
// running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}

takeOrder("pineapple", "mushroom");

// Activity 3:
// Cash machine time! JS
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your 
// balance is equal to, or more than, the amount you’re 
// trying to withdraw!

let balance = 1000;
const password = "1234";

const withdraw = (amount, pass) => {
    if (pass === password) {
        if (checkBalance(amount)) {
            balance = balance - amount;
            console.log(`Withdrawal successful, your new balance is ${balance}`);
        } else {
            console.log("Not enough balanace!");
        }

    } else {
        console.log("Passowrd is incorrect!");
    }
}

const checkBalance = (amount) => {
    if (amount <= balance) {
        return true;
    } else {
        return false;
    }
}


withdraw(100, "35345");
withdraw(400, "1234");
withdraw(2000, "1234");