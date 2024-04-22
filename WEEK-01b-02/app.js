/* Ex 2 running-js
console.log("I am in the console");*/
/* Exercice 4 - Variables 
let myName = "Henrique";

console.log(myName);

alert(myName);

var a = "3";
var b = "8";
console.log("a is " + a);
console.log("b is " + b); */
/* Exercice 6 - Practice 
// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:

const whisper= message.toLowerCase().trim();

console.log(whisper);

let x = "l45";
let y = parseInt(x.replace("l",""));

console.log(y);

let wizz = "Dumbledore";

let z = wizz.length;


console.log(wizz[wizz.length -1]);

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:

const facialHair = word.slice(5,10).replace("o","e");

console.log(facialHair);

let r = Math.floor(Math.random()* 10 +1);
console.log(r);

let a = Math.random() * 4 + 1;
console.log(a);


// toFixed

let myNumber = 5.379453;

; // Returns 5.37

console.log(myNumber.toFixed(2));
let aa = 5 * "3"; // Returns 15
console.log(aa);

// parseFloat

// parseFloat

let myString = "4.786";

parseFloat(myString); // Returns 4.786 (the number, not the string)

// ParseInt

parseInt(myString); // Returns 4
console.log(myString)

let myNum = 0;

myNum += 4;

myNum -= 2;

myNum /= 2;

myNum *= 10;
console.log(myNum);*/

/*const name = prompt("What is your name?");
const age = prompt("What is your age?");
const city = prompt("Where do you live?");
alert(`Welcome ${name}, your age is ${age} and you live in ${city}, please leave us a good review !`);
prompt("What is your name?") */

/*let price = prompt("the number :");

let priceWVAT = parseFloat(price) + (parseFloat(price)* 0.21);

alert(`the number is ${priceWVAT}`);*/
/* Surface of a circle
let radius = prompt("What is the radius of your circle?");
const PI = Math.PI
let surface = (parseFloat(radius) ** 2) * PI;

alert(`Voici le résultat : ${surface}`);*/
/* Calculatrice addition 
let num1 = prompt("Number :");

let x = parseFloat(num1);

let num2 = prompt("Number 2 :");
let y = parseFloat(num2);
let result = x + y;
alert (`Here is the result of the sum ${result}!`);*/
/* Dogs or cats ? avec le if 
const name = prompt("Hey give me your name :");
let animal = prompt("Ok this is a hard one... dogs or cats???");

if (animal === "cats") {
    alert(`Hello and welcome ${name} ! I see that you love ${animal}... did you know that cats are evil???`);
} else {
    alert(`Hello ${name} ! I see you like ${animal}, I love you.`);
} */

/* Exercice avec mystery
const mystery = "Potter 7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
} */
/* exercice Make a keyless car! 
let age = prompt("What is your age ?");

if (age < 18) {
    alert(`Sorry, you are too young to drive this car. Powering off`);
} else if (age === "18") {
    alert(`Congratulations on your first year of driving. Enjoy the ride!`);
} else {
    alert(`Powering On. Enjoy the ride!`);
} */

/* What fruit?
const favfruit = prompt("What is your favorite fruit ?").toLowerCase();


if (favfruit == "bananas") {
    alert(`Oh I also like bananas ! :D`);
} else if (favfruit == "strawberry") {
    alert(`OMG I ALSO LOVE STRAWBERRIES!!!!!`);
} else if (favfruit == "grape") {
    let favgrape = prompt("Purple or green?")
    if (favgrape === "green") {
        alert(`I guess green ones are ok...`);
    } else if (favgrape === "purple") {
        alert(`I dont like that at all...`);
    } else {
        alert(`I dont understand the color or your choices...`);
    } }
    else  {
        alert(`I dont understand the word ${favfruit} AND I'M NOT SORRY!`);  
    } 
*/

/* idee que je dois test après pour le what fruit
const favfruit = prompt("What is your favorite fruit ?").toLowerCase();
let x = "a";
switch (x) {
    case "a":
        console.log("a");   
    break;
    case "b":
        let y = "c" 
        if (y= "c") {
            console.log("bc");
        } else {
            console.log("b");
        }
    break;
    default :
    console.log("defaultcase");
    break;
} */

/*changing the names
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard.splice(1,1, "Luna");
console.log(leaderboard);

leaderboard.splice(3,1,"Draco");
console.log(leaderboard);*/
/* Selection of elements
const initialArray = [
    null, 
    true,   
    ["Apple", "two", undefined], 
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

const newArray =  [initialArray[7][0],initialArray[2][1], initialArray[4][0]];

console.log(newArray);*/
/*
Push/Pop/Shift/Unshift Practice


const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
const planets1 = planets.shift();
const planets2 = planets.push('Saturn');
const planets3 = planets.unshift('Mercury');
console.log(planets);*/
/*
const Product = {
    name : "iPHONE 15",
    inStock : true,
    price : 1249.90,
    includedInPackage : ["case", "earphones", "charger"],
}
let product1 = Product.includedInPackage[2];

console.log(product1); */

/*
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};  
  //YOUR CODE GOES DOWN HERE:
const address1 = restaurant.address;
const city1 = restaurant.city;
const state1 = restaurant.state;
const zipcode = restaurant.zipcode;
const fulladdress = address1 + +city1 + state1 + zipcode;
console.log(`${address1}, ${city1}, ${state1} ${zipcode}`);
*/
/* Even numbers
for (let i =2; i < 21; i += 2) {
    console.log(i);
  } */
  /* ODD NUMBERS
  for (let i =1; i < 20; i += 2) {
    console.log(i);
  } */
/* DECREMENT
  for (let i = 100; i >= 10; i -= 10) {
    console.log(i);
  }*/
  /*And now do another one that should print :
  for (let i =25; i >= 0; i -= 5) {
    console.log(i);
  } */
/* Another one
  for (let i =10; i <= 1000; i *= 10) {
    console.log(i);
  }*/
/* little exercice
  const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
  for (let i = animals.length-1; i>=0; i--) {
    console.log(animals[i]);
  }*/
  const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
  ];

  for (let i=users[1].firstName + users[1].lastName; i<=4; i++);
  console.log(i);