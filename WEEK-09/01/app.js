const colors = ["blue", "yellow", "red", "cyan", "violet", "green", "purple"];


function changeColor(color, delay) {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
    }, delay);
}


changeColor(colors[0], 1000); // blue
changeColor(colors[1], 2000); // yellow
changeColor(colors[2], 3000); // red
changeColor(colors[3], 4000); // cyan
changeColor(colors[4], 5000); // violet
changeColor(colors[5], 6000); // green
changeColor(colors[6], 7000); // purple