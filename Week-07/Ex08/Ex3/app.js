const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const body= document.querySelector('body');

function randomNumber() {
    return Math.floor(Math.random() * 256);
}
function randomColor() {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', () => {

    const randomRGB = randomColor();
    body.style.backgroundColor = randomRGB;
    h1.textContent = randomRGB;
})  






