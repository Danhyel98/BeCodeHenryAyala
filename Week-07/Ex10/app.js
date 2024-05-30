const body = document.querySelector('body');
p1 = document.querySelector('#player1');
p2 = document.querySelector('#player2');
resetBtn = document.querySelector('#resetBtn');
a = document.querySelector('#scoreP1');
b = document.querySelector('#scoreP2');

const maxGames = 5;
let numbGames = 0;
let scoreP1 = 0;
let scoreP2 = 0;
let finalScoreP1 = parseInt(a.textContent);
let finalScoreP2 = parseInt(b.textContent);
//Colors added just to see if it works
/*resetBtn.style.backgroundColor = "green";
p1.style.color = "red";
p2.style.color= "purple";
a.style.color = "orange";
b.style.color = "blue";*/

function winner(finalScoreP1,finalScoreP2) {
    console.log(finalScoreP1)
        let win = document.getElementById('scoreP1')
        let loos = document.getElementById('scoreP2')
        if (finalScoreP1 > finalScoreP2) {
            win.style.color='green';
            loos.style.color='red';
        } else if (finalScoreP2 > finalScoreP1) {
            win.style.color='red';
            loos.style.color='green';
        }   
}

p1.addEventListener("click", (e) => {
    if(e.target.innerText === "+1 Player One" && numbGames < maxGames) {
        let currentNumber = parseInt(a.textContent);
        currentNumber += 1;
        a.textContent =currentNumber;
        numbGames++;
        winner(currentNumber,finalScoreP2);
        } 
})

p2.addEventListener("click", (r) => {
    if (r.target.innerText === "+1 Player Two" && numbGames < maxGames) {
        let currentNumber = parseInt(b.textContent);
        currentNumber += 1;
        b.textContent = currentNumber;
        numbGames++;
        winner(finalScoreP1,currentNumber);
    } 
})


resetBtn.addEventListener("click", (o) => {
    if(o.target.innerText === "reset"){
        a.textContent= 0;
        b.textContent= 0;
        numbGames = 0;  
        a.style.color ="black";
        b.style.color = "black";
        }
})