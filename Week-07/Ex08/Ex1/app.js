const buttonWelcome= document.querySelector("button");
const buttonBye = document.querySelector("button").nextElementSibling;
const alertWelcome = () => {
    alert("Oh my God ! You again !!!");
};

const byeAlert = () => {
    alert ("Thank God ! I thought you'd' never leave!");
};

buttonWelcome.addEventListener("click", alertWelcome);
buttonBye.addEventListener("click", byeAlert);

