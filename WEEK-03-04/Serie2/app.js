// EXERCICE 0
/*
function countTrue(arr) {
const result = arr.filter((a) => a === true);
return result.length;


}


console.log(countTrue([])); */


// EXERCICE 01
/*
const possibleBonus = (a,b) => b- a >= 1 && b-a <= 6 ? true : false;
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(9, 3)); */

// EXERCICE 02
/*function num_of_digits(a) {
    let aString= a.toString();
let aLeng = aString.length;
 return aLeng;
} 
const num_of_digits = (a) => a.toString().length;
console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));*/

//EXERCICE 03
/*
const toArray = (obj) => Object.entries((obj));
console.log(toArray({a: 1, b: 2})); */
//EXERCICE 04
/*function arrayOfMultiples(num,length) {
    let arr=[];
    for (let i = 1; i <=length; i++) {
        arr.push(num * i);
    } return arr;

} 
console.log(arrayOfMultiples(7,5)); */

// EXERCICE 5
/*function removeLeadingTrailing(number) {
    return parseFloat(number).toString()
} console.log(removeLeadingTrailing("230.000"));*/

/*
const removeLeadingTrailing = (number) => parseFloat(number).toString();
console.log(removeLeadingTrailing("230.000"));*/

//EXERCICE 6
/*
const sortIt = (arr) => arr.sort();
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));*/
//EXERCICE 7
/*
function calculator(num1, sign, num2) {
    if (sign === "+") {
        return num1 + num2;
    } else if (sign === "-") {
        return num1 - num2; 
    } else if (sign === "*") {
        return num1 * num2;
    } else {
        if (num2 === 0) {
            return "Can't divide by 0!";
        } 
    }return num1 / num2;
} 
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(5, "/", 0));*/
//EXERCICE 08
/*function areaOfCountry(city,number) {
    let proporRes = (number /148940000) *100;
    let propor = proporRes.toFixed(2);
    return `${city} is ${propor}% of the total world's landmass.`; 
}
console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));*/
/*const areaOfCountry = (land, are) => `${land} is ${((area/landmass)*100).toFixed(2)}% of the total world's landmass`;*/
//EXERCICE 09
/*function reverseWords(string) { 
    let x = string.split(' ')
    if(x.length >= 2) {
        [x[0], x[x.length-1]] = [x[x.length-1], x[0]];
        return x.join(' ').trim();
    }
}
 console.log(reverseWords(" the sky is blue"));
 console.log(reverseWords("hello   world!  "));
 console.log(reverseWords("a good example"));*/
 