// Select the input element
const input = document.querySelector('#myInput');

// Initialize a variable to keep track of the input value
let inputValue = "";

// Add an event listener for the "change" event
input.addEventListener('change', function() {
    // Update the inputValue variable with the current value of the input
    inputValue = input.value;
    // Log the current value to the console
    console.log(inputValue);
});
