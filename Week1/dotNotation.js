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
