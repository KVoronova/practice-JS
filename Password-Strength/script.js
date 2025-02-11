const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

const passwordStrength = {
    weak: {
        text: "weak",
        borderColor: "#a60505",
        textColor: "#a60505"
    },
    medium: {
        text: "medium",
        borderColor: "#fefa08",
        textColor: "#fefa08"
    },
    strong: {
        text: "strong",
        borderColor: "#1f39ff",
        textColor: "#1f39ff"
    }, 
    veryStrong: {
        text: "very strong",
        borderColor: "#1aaa04",
        textColor: "#1aaa04"
    }
};

function checkPasswordComplexity(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    return {
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChars
    };
}

//FINALLY VERS (with additional checks)

function getPasswordStrength(password) {
    const { hasUpperCase, hasLowerCase, hasNumber, hasSpecialChars} = checkPasswordComplexity(password);
    const passwordLength = password.length;

    if(passwordLength < 7) {
        return passwordStrength.weak;
    } else if(passwordLength < 7) {
        if(hasNumber && (hasUpperCase || hasLowerCase)) {
            return passwordStrength.medium;
        } else {
            return passwordStrength.weak;
        }
    } else if(passwordLength < 12){
        if(hasNumber && hasUpperCase && hasLowerCase) {
            return passwordStrength.strong;
        } else {
            return passwordStrength.medium;
        }
    } else {
        if (hasNumber && hasUpperCase && hasLowerCase && hasSpecialChars) { 
            return passwordStrength.veryStrong;
        } else {
            return passwordStrength.strong;
        }
    }
}

//Update style and text
function updatePasswordStrength() {
    const password = pass.value;

    if(password.length === 0) {
        msg.style.display = "none";
        return;
    }
    msg.style.display = "block";

    const strength = getPasswordStrength(password);
    str.innerHTML = strength.text;
    pass.style.borderColor = strength.borderColor;
    msg.style.color = strength.textColor;
}

pass.addEventListener('input', updatePasswordStrength);




// First VERS (SIMPLE)

// pass.addEventListener('input', () => {
//     if(pass.value.length > 0) {
//         msg.style.display = "block";
//     } else {
//         msg.style.display = "none";
//     }
//     if(pass.value.length < 6) {
//         str.innerHTML = "weak";
//         pass.style.borderColor = "#a60505";
//         msg.style.color = "#a60505";

//     } else if(pass.value.length >= 6 && pass.value.length < 9) {
//         str.innerHTML = "medium";
//         pass.style.borderColor = "#fefa08";
//         msg.style.color = "#fefa08";

//     } else if(pass.value.length >= 9) {
//         str.innerHTML = "strong"
//         pass.style.borderColor = "#1aaa04";
//         msg.style.color = "#1aaa04";
//     }
// })




//Second VERS (update code)


// Функция для обновления стилей и текста
// function updatePasswordStrength() {
//     const passwordLength = pass.value.length;

//     if (passwordLength === 0) {
//         msg.style.display = "none";
//         return;
//     }

//     msg.style.display = "block";

//     let strength;
//     if (passwordLength < 6) {
//         strength = passwordStrength.weak;
//     } else if (passwordLength >= 6 && passwordLength < 9) {
//         strength = passwordStrength.medium;
//     } else {
//         strength = passwordStrength.strong;
//     }

//     str.innerHTML = strength.text;
//     pass.style.borderColor = strength.borderColor;
//     msg.style.color = strength.textColor;
// }

// // Добавляем обработчик события
// pass.addEventListener('input', updatePasswordStrength);