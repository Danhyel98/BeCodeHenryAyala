//EXERCICE 00
/*function listNum (n) {
   
    for (let i =1; i<= n; i++) {
      if ( i % 3 === 0 && i % 5 === 0) {
         console.log("FizzBuzz");
      } else if (i % 5 === 0) {
         console.log("Buzz");
      } else if (i % 3 === 0) {
         console.log("Fizz")
      } else {
         console.log(i);
      }
    }  
}
listNum(20)*/

// EXERCICE 01
/*function ransomNote(noteText, magazineText) {
    
   const noteWords = noteText.split(" ");
   const magazineWords = magazineText.split(" ");

   const magazineWordFrequency = {};
   magazineWords.forEach(word => {
       magazineWordFrequency[word] = (magazineWordFrequency[word] || 0) + 1;
   });

   for (let i = 0; i < noteWords.length; i++) {
       const word = noteWords[i];
       if (!magazineWordFrequency[word] || magazineWordFrequency[word] === 0) {
           return false;
       } else {
           magazineWordFrequency[word]--;
       }
   }

   return true;
}*/

//console.log(ransomNote("this is a secret note to you from a secret admirer","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"));

//console.log(ransomNote("this is a secret note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"));
//console.log(ransomNote("this is a note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"));
//console.log(ransomNote("Today I was today years old", "Today I'm pretty not like yesterday"));
//console.log(ransomNote("Today I was today years old", "Today I'm pretty not like today"));



//EXERCICE 02

/*function isPalindrome(txt) {
   let txtMod = txt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 let newWord = txt.replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("").toLowerCase();  
 return txtMod === newWord;
}

console.log(isPalindrome("race car"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("Hello World"));
console.log(isPalindrome("Madam, I'm Adam"));*/

//EXERCICE 03
function caesarCipher(str, num) {
   let newStr= str.toLowerCase()
}

//EXERCICE 04
/*
function revStr(str) {
   let newStr = str.split(" ");
   for (let i=0; i<newStr.length; i++) {
      newStr[i] = newStr[i].split("").reverse().join("").toLowerCase();
   }
   return newStr.join(" ");
}
console.log(revStr("This is a string of words"));*/

//EXERCICE 05
/*function reverse(arr) {
   let start = 0;
   let end= arr.length-1;

   while (start < end) {
      let ord= arr[start];
      arr[start] = arr[end];
      arr[end] = ord;
      start++;
      end--;
      
   } return arr;

} 
console.log(reverse([1, 2, 3]));*/

//EXERCICE 06

/*function findPairs(numArray, sum) {
   const sortArr=numArray.sort();
   const pairs= [];
for (let i=0; i<numArray.length;i++){
   for(let j=1+i;j<numArray.length;j++){
      o=numArray[i];
      b=numArray[j];
         if(o+b ===sum)
         pairs.push([o,b]);
   }

} return pairs;
} console.log(findPairs([1, 6, 4, 5, 3, 3], 7));*/

//EXERCICE 07

/*function fibonacci(num) {
let start = [1,1];
for (let i= 0; i< (num -2); i++) {
   start.push(start[start.length-1]+ start[start.length-2]);

}return start;
}
console.log(fibonacci(4));
console.log(fibonacci(9));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));*/

