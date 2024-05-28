const body = document.querySelector('body');
p1 = document.querySelector('#player1');
p2 = document.querySelector('#player2');
resetBtn = document.querySelector('#resetBtn');
a = document.querySelector('#scoreP1');
b = document.querySelector('#scoreP2');


//Colors added just to see if it works
resetBtn.style.backgroundColor = "green";
p1.style.color = "red";
p2.style.color= "purple";
a.style.color = "orange";
b.style.color = "brown";


p1.addEventListener("click", (a) => {
    for (let i =0; i<=5; i++) {
    if (a.innerText === "0") {
        a.textContent = `${i}`;
    }
    if (a.innerText === "1") {
        a.textContent = `${i+i}`;
    }
    if (a.innerText === "2") {
        a.textContent = `${i+i}`;
    }}
    //alert("the first button has been clicked");
  });


p2.addEventListener("click", () => {
    alert("the second button has been clicked");
  });



resetBtn.addEventListener("click", () => {
    alert("the reset button has been clicked");
  });