const form = document.getElementById('registerForm');
const button = document.querySelector("input[type=submit]");


button.addEventListener("click", (event) => {
event.preventDefault(); // Prevents the form from submitting and refreshing the page
let allGood =0;

let username = document.getElementById('username');
let email = document.getElementById('email');
let password1 = document.getElementById('password');
let password2 = document.getElementById('confirm_password');

if (username.value.length < 5) {
    watchError(username, "Must be at least 5 characters");
}else if(username.value.length > 10)  {
    watchError(username, "Must be at most 10 characters"); 
}else if (username.value.toLowerCase() !== username.value){
    watchError(username, "Must be in lowercase" );
}  else {
    WatchSuccess(username);
    allGood++;
} 

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email.value)) {
    watchError(email, "Not a valid email format");
} else {
    WatchSuccess(email);
    allGood++;
}

if(password1.value.length < 8 || password1.value.length > 15 ) {
    watchError(password1, "Must be between 8 and 15 characters");
}else {
    WatchSuccess(password1);
    allGood++;
}


if(password2.value !== password1.value) {
    watchError(password2, "Passwords do not match");

} else {
    WatchSuccess(password2);
    allGood++;
}


if(allGood === 4) {
    console.log("Username:", username.value);
    console.log("Email:", email.value);
    console.log("Password:", password1.value);
    console.log("Confirm Password:", password2.value);
}
});

function watchError(input, message) {
    const parent = input.parentElement;
    parent.classList.add('error');
    parent.classList.remove('success');
    parent.querySelector('.msg').textContent = message;
    parent.querySelector('.msg').style.display = 'block';
}

function WatchSuccess(input) {
    const parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
    parent.querySelector('.msg').textContent = "Looks good!";
    parent.querySelector('.msg').style.display = 'block';
}