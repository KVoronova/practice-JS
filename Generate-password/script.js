// Simple generation script
const passwordBox = document.getElementById("password");
const generateBtn = document.querySelector(".btn");
const copyImg = document.querySelector(".copy");
const length = 11;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChars  = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

generateBtn.addEventListener("click", () => {
    createPassword();
});


function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    alert("Password copied!");
    passwordBox.value = passwordBox.value = '';
}

copyImg.addEventListener("click", () => {
    copyPassword();
})