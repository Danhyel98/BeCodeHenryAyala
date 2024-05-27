const mainHeading = document.getElementById("main-heading");
// Now, mainHeading is an object that represents the h1 with id "main-heading"

mainHeading.style.color = "green";
// Inside the object mainHeading, we call the property "style" (wich is an object as well) and then the property color inside of style. We then assign "red" as a value to the color.



//Check what is the innerText of the first li.list-item and assign it to a variable.
const firstListItem = document.querySelector(".list-item");
const firstListItemText = firstListItem.innerText;
console.log(firstListItemText);

// Create another li element.
const myList = document.querySelector("ul");
const myItem = document.createElement("li");

//Set the inner text of this last li to be equal to the first li.
myItem.innerText = firstListItemText;

//Append the new li tag to the list.
myList.appendChild(myItem);

//Now, give all the li the color purple
var colLi = document.querySelectorAll('li');
colLi.forEach(function(myList){
    myList.style.color = 'purple';
})


//Then, give the last li the color gold

const lastItem= colLi[colLi.length-1];
lastItem.style.color = 'gold';


const hallItem = Array.from(colLi).find(item => item.innerText.includes("Annie Hall"));
if (hallItem) {
    hallItem.innerHTML = hallItem.innerHTML.replace("Hall", '<span style="color: red;">Hall</span>');
}
