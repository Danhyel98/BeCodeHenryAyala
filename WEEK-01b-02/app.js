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
/* 16 - ForLoops - Even numbers
for (let i =2; i < 21; i += 2) {
    console.log(i);
  } */
  /* 16- ForLoops - ODD NUMBERS
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
  /*
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

  for (let i = 0; i < users.length; i++) {
    console.log(`${i+1}.My full name is ${users[i].firstName} ${users[i].lastName}`);
  }
   */ 
/*
  const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
  ];
  
  // I can use nested loops to do that :
  
  for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }*/
/*
  let num = 0;

while (num < 10) {
  console.log(num);
  num++;
}*/
/*
const secretWord = "Hey";

let guess;

while (guess !== secretWord) {
   guess = prompt("enter the secret code...");
}

alert("Congratulations! You got the secret code !");*/
/*
let num;

while(true) {
    num = prompt(`Entrer un numéro svp`);
    if(!isNaN(num)) { 
        break;
    } else {
        alert(`Entrer un chiffre et un chiffre seulement !`);
    }
}

let random = Math.floor(Math.random() * num) +1;
let guess;
let attempts = 0;

while (guess !== random) {
    attempts++;
    guess = parseInt(prompt(`Deviner le chiffre entre 1 et ${num}.`));
    if(isNaN(guess)) {
        alert(`Me faut un vrai chiffre`);
    } else if (guess > random) {
        alert(`Une réponse plus basse tu as besoin`);
        
    } else if (guess < random) {
        alert(`Une réponse plus grande tu as besoin`);
  
    } else {
        alert(`Enfin tu as trouvé et tu n'as eu besoin que de ${attempts} essaies :p`);
    }
}*/
/*
let laListe = [];

while (true) {
 
  let command = prompt(`What would you like to do? You can choose : "new", "list", "delete", "quit".`);
  if (command === "new") {
    let add = prompt(`What would you like to add?`);
    if (add) {
      laListe.push(add);
      alert (`This element : ${add} has been added to the list`)}
      else {
      alert(`Why is it empty?`);
      }
    
    } else if (command === "list") {
      console.log("***** TODO *****");
      if (laListe.length === 0) {
        alert(`This is empty bro`)
      } else {
        for (let i= 0; i < laListe.length; i++)  {
          console.log(`${i + 1}.${laListe[i]}`);
        }
      }
    } else if (command === "delete") {
      let delnum = parseInt(prompt("Which item would you like to delete? Put a number and only a number please."));
        if(delnum !== isNaN && delnum > 0 ) {
          let dele = laListe.splice(delnum -1, 1);
          console.log(`You delete this task : ${dele}.`)
        } else {
          alert("I said a number...come on be better");
        }
    } else if (command === "quit") {
      console.log("You closed the TODO app, please come back");
      break;
    } else {
      console.log(`Wrong command ! Please try : "new", "list", "delete" or "quit"`); 
    }
  } */

  /*function myFunctionName() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
  console.log("FA");
  console.log("SOL");
  console.log("LA");
  console.log("SI");
}

myFunctionName();
myFunctionName();
myFunctionName();
myFunctionName();
myFunctionName();
myFunctionName();
*/
/*
function myDie(faces, times) {
  for (let i = 1; i <= times; i++) {
  let dieResult = Math.floor(Math.random() * faces +1);
  console.log(`Die ${i}: ${dieResult}`);}
}

myDie(6, 5); */
/*
function repeat(txt, times) {
  if (times !==isNaN) {
    for (let i= 1; i <= times; i++) {
      let result = '';
      result += txt;
      console.log(result);
    }
  } else {
    console.log("sorry not sorry, that is not a number");
  }
}

repeat("Boo", 2);
*/
/*
function greet(firstName, lastName) {
  console.log(`Welcome, you are : ${firstName} ${lastName[0]}.`);
}

greet("Henry", "Ayala");*/

/*
function addidi(number1, number2) {
  if (number1 !==isNaN && number2 !== isNaN) {
    return number1 + number2;
  } else {
    console.log("Error please give me numbers");
  }
  
}
const myVariable = addidi(3, 2);
console.log(myVariable);*/
/*
function logs() {
  console.log("Hello");
  console.log("World");
  
  console.log("Goodbye");
  return 4;
  console.log("World");
}

const myVariable = logs();

console.log(myVariable);*/
/*
function isShortWeather(temp) {
  return temp >= 24;
}

console.log(isShortWeather(10));*/
/*
function lastElement(array) {
  if (array.length === 0) {
    return null
  } else {
    return array.slice(array.length - 1);
  }
  
}


console.log(lastElement([1, 3, 7, 9]));
console.log(lastElement([1]));
console.log(lastElement([])); */
/*
function capitalize(txt) {
  const cutWord = txt.slice(0, 1);
  const firstLetter = cutWord.toUpperCase();
  const lastPart = txt.slice(1, txt.length);
  console.log(`${firstLetter}${lastPart}`);
}

capitalize("denomination");*/

/*
function sumArray(arr) {
  if (arr !== isNaN) {
  let sum = 0;
  for (let a of arr)
    sum += a;
  return sum;
  }
}
console.log(sumArray([1, 2, 3]));
*/
/*
const days = ["Week", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function returnDay(num) {
  if (num <= 7 && num >=1) {
    return days[num];
  } else {
    return null;
  }
}
console.log(returnDay(3));*/
/*
const i = "Hello World";

for (let i = 0; i < 5; i++) {
  console.log(i);
}*/
/*
const callTwice = function (func) {
  func();
  func();
};

// Here, the callTwice function takes another function as a parameter and call it two times

const rollDie = function () {
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
};

callTwice(rollDie);*/
/*
const callTimes = function (func, times) {
for (i = 0; i < times; i++) {
  func();
}
}
const rollDie = function () {
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
};

callTimes(rollDie,2);*/
/*const str = "Hello";


console.log(str.slice(2,4));*/

/*const user = {
  firstName: "Vito",
  lastName: "Corleone",
  printFullName: function () {
    console.log("My name is " + this.firstName + " " + this.lastName);
  },
};
user.printFullName();*/
/*const user = {
  firstName: "Henry",
  lastName: "Ayala",
  age: 25,
  printAge: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`)
  }, 
  aYearHasPast: function () {
    this.age++;
  },
  
}
user.printAge();
user.aYearHasPast();
user.printAge();*/

/* SERIES ALGOS*/

/* EXERCICE 00
function checkPlease(a, b) {
  if (a === 10 || b === 10 || a + b === 10){
    return true;
  } else {
    return false;
  }
}

console.log(checkPlease(4, 2));
console.log(checkPlease(9,10));
console.log(checkPlease(9,9));
console.log(checkPlease(1,9));
*/
//EXERCICE 01
/*aYear = 365;
function ageInDays(age) {
  if (age >= 0 && age !==isNaN) {
    return age * aYear;
  } else {
    console.log("There's a mistake give me your age please;")
  }
}
console.log(ageInDays(30));*/


// EXERCICE 02
/*function addUp(num) {
  if (num === isNaN || num < 1 || num > 1000) {
    console.log("Please give us a number.")
  } else {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
      
    }
    return sum;
  }
}
console.log(addUp(4)); */
// EXERCICE 03
/*function myArray(arr) {
   const sortArr = arr.sort((a,b) => a - b);
    return [sortArr[0], sortArr[arr.length -1]];
  } 

console.log(myArray([1,4,5,2,6]))*/
// EXERCICE 04
/*function detectedWord(txt) {
  let newWord = "";
  for (let i= 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toLowerCase()) {
      newWord += txt[i];
    }
  }
  return newWord;
}
console.log(detectedWord("dEdRdT")); 
console.log(detectedWord("UcUNFYGaFYFYGtNUH"));*/

// EXERCICE 05
/*let drinks = [
  {name: "lemonade", price: 10},
  {name: "lime", price: 10},
  {name: "coke", price: 8},
  {name: "vodka", price: 17},
  {name: "water", price: 3},
];

function sortDrinkByPrice(drinks) {
  const sorted = drinks.sort((a,b) => a.price - b.price);
  return sorted;
}
console.log(sortDrinkByPrice(drinks));*/
// EXERCICE 06
/*function animals(chick, cows, pigs) {
 //const legsChick = chick * 2;
  //const legsCows = cows * 4;
  //const legsPigs = pigs * 4;
  return (chick* 2) + ((cows + pigs) *4)//(cows * 4) + (pigs * 4); 
} 
console.log(animals(2, 3, 5)); */

// Exercice 07
/*const f = (probability, prize, pay) => ((probability * prize)- pay) > 0;
console.log(f(0.9, 1, 2));*/


/* EXERCICE 08
function frames(fram, minutes) {
  return ((fram * 60) * minutes);
}
console.log(frames(10, 1)); */
 //EXERCICE 09
/*function calculateFuel(numb) {
  if ((numb * 10) > 100) {
    return numb * 10;
  }
  return 100;
}

console.log(calculateFuel(23.5));*/