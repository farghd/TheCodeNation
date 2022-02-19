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

