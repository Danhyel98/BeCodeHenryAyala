function generateBG(color, delay) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.9) {
                reject('Random failure');
            } else {
                document.body.style.backgroundColor = color;
                resolve();
            }
        }, delay);
    });
}

async function changeColorsSequentially() {
    const colors = ['blue', 'yellow', 'red', 'cyan', 'violet', 'green', 'purple'];

    for (const color of colors) {
        try {
            await generateBG(color, 1000);
        } catch (error) {
            console.log('Oh no! An error:', error);
            break; // Optionally break out of the loop on error
        }
    }
}

// Start the color change sequence
changeColorsSequentially();
