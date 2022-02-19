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


