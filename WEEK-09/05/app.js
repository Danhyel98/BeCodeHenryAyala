function changeColorWithDelay(color) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000);
    });
}

changeColorWithDelay('blue')
    .then(() => changeColorWithDelay('yellow'))
    .then(() => changeColorWithDelay('red'))
    .then(() => changeColorWithDelay('cyan'))
    .then(() => changeColorWithDelay('violet'))
    .then(() => changeColorWithDelay('green'))
    .then(() => changeColorWithDelay('purple'))
    .catch((error) => {
        console.error("An error occurred:", error);
    });
