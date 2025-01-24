// Generation with advanced options 

const passwordField = document.getElementById("password");
const generateBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".copy");
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");
const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");

const options = {
    lowercase: {
        checkbox:document.getElementById("lowercase"),
        chars:"abcdefghijklmnopqrstuvwxyz"
    },
    uppercase: {
        checkbox:document.getElementById("uppercase"),
        chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    numbers: {
        checkbox:document.getElementById("numbers"),
        chars:"0123456789"
    },
    symbols: {
        checkbox:document.getElementById("symbols"),
        chars:"@#$%^&*()_+~|}{[]></-="
    },
}

const updateLengthAndSlider = () => {
    lengthValue.textContent = lengthSlider.value;
    const progress = ((lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min)) * 100;
    lengthSlider.style.setProperty('--progress', `${progress}%`);
};

lengthSlider.addEventListener('input', updateLengthAndSlider);

[decreaseBtn, increaseBtn].forEach((btn,i) => {
    btn.addEventListener('click', () => {
        lengthSlider.value = Math.max(4, Math.min(32, +lengthSlider.value + (i * 2 -1)));
        updateLengthAndSlider();
    })
});

copyBtn.addEventListener('click', () => {
    if(passwordField.value) {
        navigator.clipboard.writeText(passwordField.value);
        alert("Password copied!");
        passwordField.value = '';
    }
});

generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthSlider.value, 10);
    const selectedChars = Object.values(options)
    .filter(opt => opt.checkbox.checked)
    .map(opt => opt.chars)
    .join('');

    if(!selectedChars) {
        alert('Please, select at least one character option!');
        passwordField.value = '';
        return;
    }

    passwordField.value = Array.from({ length }, () => 
        selectedChars[Math.floor(Math.random() * selectedChars.length)]).join('');
});

updateLengthAndSlider();