const bold = document.querySelector("b");
// Make bg in beige
//bold.closest("body").style.backgroundColor = "beige";
bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor="beige";


// Make b red
bold.style.color="red";

//the part-2 div should have a darkblue background and a white color.
bold.parentElement.style.backgroundColor ="darkblue";
bold.parentElement.style.color = "white";

//The anchor tag in part-2 should be pink

//bold.closest("body").querySelector(".myBtn").style.color= "pink";
bold.parentElement.parentElement.querySelector(".myBtn").style.color= "pink";


//all li in part-1 should be orange
//bold.closest("body").querySelectorAll(".part-1 li").forEach(li=>li.style.color="orange");

bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("li").forEach(li=>li.style.color="orange");

//All a inside the lis should be green

//bold.closest("body").querySelectorAll(".part-1 li a").forEach(a => a.style.color="green");

bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("li a").forEach(a=>a.style.color="green");

//Finally, the h1 should be uppercase.

//bold.closest("body").querySelector("h1").style.textTransform="uppercase";

bold.parentElement.parentElement.parentElement.parentElement.querySelector("h1").style.textTransform="uppercase";