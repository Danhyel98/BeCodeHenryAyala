//EXERCICE 00
/*function oddishorEvenish(numb) {
    let convArr= numb.toString().split("").map(Number);
    let newSum =0;
    for (let i= 0; i< convArr.length;i++){
        newSum +=convArr[i];
    }
    //return convArr.map((x) => x++)
    if (newSum % 2 === 0) {
    return "Evenish";
    }
    return "Oddish";
}
console.log(oddishorEvenish(42));*/
//EXERCICE 01
/*
function getTotalPrice(arr) {
    let realPrice = 0;
   for (let i= 0; i<arr.length; i++) {
    realPrice += arr[i].quantity * arr[i].price;
   } return realPrice.toFixed(1);
} 

//const getTotalPrice = (gro) => (gro.price) * gro.quantity ;


console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]));
  console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]));

  console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]));

  console.log(getTotalPrice([
    { product: "Milk", quantity: 5, price: 1.50 }
  ]));
  console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ])); */

    /*if (str.length % 2 !== 0) {
        let newWord = str.reverse().join('');
    } return newWord;*/

//EXERCICE 02
// AREVOIR
/*
function reverseOdd(str) {
    return str.split(" ").map(word => {
    return word.length % 2 === 1 ? word.split("").reverse().join("") : word;
        }).join(" ");
}
console.log(reverseOdd("Eat this magot please"));
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));*/

//EXERCICE 03
/*function isSmooth(word) {
  let lowWord= word.toLowerCase().split(' ');
    for (let i = 0; i<lowWord.length-1; i++) {
      let firstLetter = lowWord[i];
      let lastLetter = lowWord[i+1];
      //return firstLetter[firstLetter.length-1];
      //return lastLetter[0];
        if (firstLetter[firstLetter.length-1] === lastLetter[0]) {
          return true;
  } 
}return false;
} 

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway")); 
console.log(isSmooth("She eats super righteously"));*/
/*
// EXERCICE 04
function sevenBoom(dig) {
  let newDig = dig.join("").split("").map(Number);
  //return newDig;
    if (newDig.includes(7)) {
      return "Boom!";
    } return "There'is no 7 in this array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));*/

//EXERCICE 05
// formula = (0 °C × 9/5) + 32 = 32 °F
/*function convert(deg) {
  let lowDeg = deg.toLowerCase();
  if (lowDeg.includes("c")) {
    let degr = parseInt(lowDeg);
    return (degr * 9/5) +32;
   //return "C is there !!"
  }  else if (lowDeg.includes("f")) {
    let degr = parseInt(lowDeg);
    return ((degr-32) * 5/9).toFixed(0);
  } return "error";
} 
console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33"));*/

//EXERCICE 06
/*function findBrokenKeys (a, b) {
  let aLow = a.toLowerCase();
  let bLow= b.toLowerCase();
  //let str1 = a.replace(" ","");
  //let str2 = b.replace(" ","");
  let bk= [];
  for (let i =0; i < a.length; i++) {
    if (aLow[i] !== bLow[i] && !bk.includes(aLow[i])) {
      bk.push(aLow[i]);
    }
  }return bk;
}
//console.log(findBrokenKeys("happy birthday", "happy birthday"));
console.log(findBrokenKeys("haPPy birthday", "haWWy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));*/