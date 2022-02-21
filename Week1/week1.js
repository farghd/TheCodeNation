// ******** dotNotation **************


/*ACTIVITY 1
Create a program that stores someone’s name, 
age and favourite colour and log it to the console 
in a complete sentence using Template Literals.*/

let name = "John";
let age = "32";
let favoriteColour = "Blue"
let wholeSentence = `Hi, my name is ${name} and I am ${age} years old. My favorite colour is ${favoriteColour}.`;

console.log(wholeSentence);



/*ACTIVITY2
Create a program that stores what you eat today 
for breakfast, lunch and dinner. Log these to the 
console.*/

let breakfast = "egg and sausage";
let lunch = "pizza";
let dinner = "pasta";
let wholeSentence = `Breakfast: ${breakfast}\nLunch: ${lunch}\nDinner: ${dinner}`;

console.log(wholeSentence);

/*ACTIVITY3
Create a program that calculates the number 
of days from today to your birth date.*/

let now = Date.now();
let birthDate = Date.parse("10/01/1991");
let daysCount = (now - birthDate) / 1000 / 60 / 60 / 24;
console.log(`Number of days from my birth date is: ${daysCount}`);

// Activity 4:
// > Create 9 variables: space1, space2… space9. 
// > Assign either the value ‘x’,’o’,’ ‘, to each of 
// these variables.
// > Insert the variables into your board using the 
// ${varName} syntax and make it look like the 
// displayed board. 

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

let board = `
        |       |    
    ${space1}   |   ${space2}   |  ${space3}  
        |       |    
------------------------
        |       |    
    ${space4}   |   ${space5}   |   ${space6}
        |       |       
------------------------
        |       |       
    ${space7}   |   ${space8}   |   ${space9}          
        |       |       
`;

console.log(board);



// ********** if_else_switch ************

// Activity 1:
// Create a variable called age. Write an if statement
// JS
// that logs “Yes I can serve you” if the age is greater 
// than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable 
// called country in.
// Eg. if age > 17 and country == “UK”.

let age = 18;
let country = "usa";
if (age > 17 && country == "UK" ){
    console.log("Yes I can serve you");
}
else{
    console.log("You aren't old enough");
}

// Activity 2:
// Create a variable for any pizza topping. 
// Create a switch statement, if the topping is one of your 
// JS
// favourite ingredients, log to the console “These are 
// important ingredients for my pizza.” If you don’t mind 
// having Pepperoni for example log to the console “I don’t 
// mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} 
// should not be on a pizza.” 

let topping = "olive";

switch (topping) {
    case "mushroom":
    case "olive":
        console.log("These are important ingredients for my pizza.");
        break;
    case "pepperoni":
        console.log(`I don't mind having ${topping}`);
        break;
    default:
        console.log(`${topping} should not be on a pizza`);
}

// Activity 3:
// Create a variable called password. 
// Check how many letters are in the password, if there are 
// JS
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console. 

let password = "jskdhsdsdde";
let passLength = password.length;

if (passLength < 8){
    console.log("Too short");
}
else{
    console.log(password);
}

// Activity 4:
// Create a variable called num. 
// Check if the variable is divisible by 3 or 5. If it 
// is, log “This number is divisible by 3 or 5”. 
// Otherwise log something else.

let num = 7;

if(num % 3 == 0 || num % 5 ==0){
    console.log("This number is divisible by 3 or 5");
}
else{
    console.log("This number is not divisible by 3 or 5");
}

// Activity 5:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// JS
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console.

let num = 15;

switch (true) {
    case (num % 3 == 0 && num % 5 == 0):
        console.log("fizzbuzz");
        break;
    case num % 3 == 0:
        console.log("fizz");
        break;
    case num % 5 == 0:
        console.log("buzz");
        break;
    default:
        console.log(num);
}

// Activity 6:
// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202). 

let num = "12335";
let reverse = num.split("").reverse().join("");

if(num == reverse){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

// Activity 7:
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
// logs to the console where someone is at times of the day. E.g. if 
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

let time = 8;
let placeOfWork = "chester";
let townOfHome = "Liverpool";

if(time == 7){
    console.log("I'm at home");
}
else if(time == 8){
    console.log("I'm commuting");
}
else if(tme== 9){
    console.log("I'm at work");
}

// Activity 8:
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.

let word = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let liA = word.lastIndexOf("a");
let liE = word.lastIndexOf("e");
let liI = word.lastIndexOf("i");
let liO = word.lastIndexOf("o");
let liU = word.lastIndexOf("u");
let lastVowel = Math.max(liA, liE, liI, liO, liU);
console.log(lastVowel);

// Activity 9:
// Create a variable called word that takes a string. Create 
// an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false.

let word = "farzad";
let firstLetter = word.charAt(0);
let lastLetter = word.charAt(word.length - 1);

if(firstLetter == lastLetter){
    console.log(true);
}
else{
    console.log(false);
}

// Activity 10:
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together.

let num1 = 2;
let num2 = 2;
let sum = num1 + num2;

if (sum % 2 == 0) {
    console.log(sum);
}
else {
    let multiplied = num1 * num2;
    console.log(multiplied);
}


// ******** Arrays_Loops **********

// Activity 1: JS
// Make an array of 3 your favourite songs. 
// 3 of them.
// Log them to the console. 
// Can you add another two songs to the list 
// using a method and then remove the last one
// added?

let favSongs = [
    "song1",
    "song2",
    "song3",
];
console.log(favSongs);

favSongs.push("song4", "song5");
console.log(favSongs);

favSongs.pop();
console.log(favSongs);

// Activity 2:
// Using MDN choose one of the following methods: 
// JS
// map(), shift(), unshift(), splice(), unsplice(). 
// Create a program to demonstrate the use of the 
// method. 

let nums = [1, 2, 3, 4];
console.log(nums);

nums.splice(2);
console.log(nums);

nums.splice(2, 0, 5, 6);
console.log(nums);

nums.splice(2, 0, 4);
console.log(nums);

nums.splice(3, 1, 8);
console.log(nums);



// Activity 1:
// Create an array that lists your favourite films, up to 
// JS
// 5 elements.
// Add 2 more using a method. 
// Use a loop to cycle through the array

let films = [
    "film1",
    "film2",
    "film3",
    "film4",
    "film5"
];

films.push("film6", "film7");

for(let i=0; i < films.length; i++) {
    console.log(films[i]);
}

// Activity 2:
// Generate 6 random numbers between JS
// 1-50 and log them to the console.

let count = 0;

while (count < 6) {
    let rand = Math.floor(Math.random() * 50);
    if(rand != 0) {
        console.log(rand);
        count++;
    }
}

// If we can create a loop to put 0-9 on the screen, how 
// can we count from 9-0? Create a program that does 
// this.
// Activity 3:

for(let i=9; i >= 0; i--) {
    console.log(i);
}

// Activity 4:
// Displays 4 films stored in an array. JS
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is 
// Ghostbusters. 
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! 
// we want Ghostbusters!

let films = [
    "film1",
    "film2",
    "Ghostbusters",
    "film4",
];

let message = "Boo! we want Ghostbusters!";

for(let i=0; i < films.length; i++) {
    console.log(films[i]);
    let currentFilm = films[i];
    if(i===2 && currentFilm === "Ghostbusters") {
        message = "Yay it’s Ghostbusters";
    }
}

console.log(message);

// Activity 5:
// Generate a random number between 1 and 30 
// JS
// six times.
// For each random number generated, check if 
// this number of divisible by 7 or not.
// Log out a message to the console if it is divisible 
// by 7 or not. 

let steps = 0;

while (steps < 6) {
    let rand = Math.floor(Math.random() * 30);
    if (rand != 0) {
        if (rand % 7 == 0) {
            console.log(`${rand} divisible by 7`);
        } else {
            console.log(`${rand} not divisible by 7`);
        }
        steps++;
    }
}

// Activity 6:
// Imagine you’re a programmer for a social media platform! You have 
// been tasked with building a prototype for a mutual followers program. 
// JS
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
// In these arrays place 4 names as strings. Make sure there are 2 names 
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the 
// matching follower

let bobsFollowers = [
    "name1",
    "name2",
    "name3",
    "name4"
];

let hannahsFollowers = [
    "name3",
    "name4",
    "name5",
    "name6",
];

for(let i=0; i < bobsFollowers.length; i++) {
    let bobsSelectedFollower = bobsFollowers[i];
    
    for(let j = 0; j < hannahsFollowers.length; j++) {
        let hannahsSelectedFollower = hannahsFollowers[j];

        if(bobsSelectedFollower === hannahsSelectedFollower) {
            console.log(`Matching follower ${bobsSelectedFollower}`);
        }
    }
}


// ********** Functions *************


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




// ******** Objects ******************

// Activity
// JS
// … let’s create an object called person with a key 
// called name and set the value to your name.
// Add another key called age.


const person = {
    name: "Farzad",
    age: 31
};



// Activity:
// Let’s create an alarm.
// Create a key called weekendAlarm, with a value saying “no 
// JS
// alarm needed” and a key called weekdayAlarm, with a value 
// saying “get up at 7am”.
// Create a variable called day and one called alarm.
// If day is Saturday or Sunday, set alarm to weekendAlarm.
// If day is a weekday, set alarm to weekdayAlarm


const Alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7 AM"
};

let day = "Sunday";
let myAlarm;

switch(day) {
    case "Saturday":
    case "Sunday":
        myAlarm =  Alarm.weekendAlarm;
        break;
    default:
        myAlarm = Alarm.weekdayAlarm;
}

console.log(myAlarm);


// Activity:
// JS
// Let’s add a list of favourite songs to our 
// person object and log them to the console

const person = {
    name: "Farzad",
    age: 31,
    favSongs: [
        "song1",
        "song2",
        "song3"
    ]
};

console.log(person.favSongs);

// Activity 1:
// JS
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it 
// should return “Hello my name is ${this.name}”

const person = {
    name: "Farzad",
    age: 31,
    favSongs: [
        "song1",
        "song2",
        "song3"
    ],
    sayHi() {
        return `Hello my name is ${this.name}`;
    }
};


// Activity 2: JS
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a 
// string saying [Your Pet Name] is eating/drinking

const pet = {
    name: "Aslan",
    typeOfPet: "Cat",
    age: 1,
    colour: 'grey',
    eat() {
        return `${this.name} is eating.`;
    },
    drink() {
        return `${this.name} is drinking`;
    }
};

// Activity 3:
// Create an object called coffeeShop with key values of: 
// JS
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all 
// items chosen with costs and total costs.

const coffeeShop = {
    branch: "Liverpool",
    drinks: [
        { name: "Coffe", price: 4 },
        { name: "Coke", price: 2 },
        { name: "water", price: 1 }
    ],
    food: [
        { name: "burger", price: 5 },
        { name: "Pizaa", price: 7 },
    ],

    drinksOrdered() {
        let totalCost = 0;
        for (let i = 0; i < this.drinks.length; i++) {
            totalCost += this.drinks[i].price;
        }

        return `Your drinks order total cost: ${totalCost}`;
    },

    foodOrdered() {
        let totalCost = 0;
        for (let i = 0; i < this.food.length; i++) {
            totalCost += this.food[i].price;
        }

        return `Your food order total cost: ${totalCost}`;
    }
};

