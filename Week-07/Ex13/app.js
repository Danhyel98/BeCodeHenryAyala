const password1 = document.getElementById('password');
const password2 = document.getElementById('confirm_password');
const button = document.getElementById('submit');


function checkPassword (password1.value,password2) {
    if (password1 != password2) {
        alert('password are not the same');
    }
}

button.addEventListener('click', function() {
    checkPassword();

})