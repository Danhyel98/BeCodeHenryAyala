const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

setTimeout(() => {
  h1.textContent = 'There are a lot of buttons here !';
  for (let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.textContent = `I am button ${i}`;
    container.appendChild(button);
  }
}, 2000);
