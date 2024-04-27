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


/* JE ME SUIS ARRETE ICI j ai pas encore terminé
function isSmooth(str) {
    let allLc = str.toLowerCase();
    let newArr = allLc.split(" ");
    if (newArr[i].length-1 )
    return newArr;
}
console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));*/