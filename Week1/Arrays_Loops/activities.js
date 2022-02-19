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


