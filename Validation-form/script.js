let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

const contactName = document.getElementById('contact-name');
const contactPhone = document.getElementById('contact-phone');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');


function validateName() {
    const name = contactName.value.trim();

    if(!name) {
        nameError.innerHTML = `Name is required`;
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = `Please, enter your full name`;
        return false;
    }
    nameError.innerHTML = `✔️`;
    return true;
};

function validatePhone(){
    const phone = contactPhone.value.trim();

    if(!phone) {
        phoneError.innerHTML = `Phone is required`;
        return false;
    }
    if(!phone.match(/^(?=(?:\D*\d){12}\D*$)[\d ]{14,15}$/)) {
        phoneError.innerHTML = `Enter a valid digit number`;
        return false;
    }
    phoneError.innerHTML = `✔️`;
    return true;
};

function validateEmail() {
    const email = contactEmail.value.trim();

    if(!email) {
        emailError.innerHTML = `Email is required`;
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML = `Enter a valid email`;
        return false;
    }
    emailError.innerHTML = `✔️`;
    return true;
};

function validateMessage() {
    const message = contactMessage.value.trim();
    const requiredLength = 30;
    const left = requiredLength - message.length;

    if(left > 0) {
        messageError.innerHTML = `${left} more charecters required`;
        return false;
    }
    messageError.innerHTML = '✔️';
    return true;
}

function validateForm() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if(!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill in all fields correctly❗️';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    return true;
};

contactName.addEventListener('input', validateName);
contactPhone.addEventListener('input', validatePhone);
contactEmail.addEventListener('input', validateEmail);
contactMessage.addEventListener('input', validateMessage);



//First Version

// function validateName() {
//     let name = document.getElementById('contact-name').value;

//     if(name.length == 0) {
//         nameError.innerHTML = 'Name is required';
//         return false;
//     }
//     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         nameError.innerHTML = 'Write full name';
//         return false;
//     }
//     nameError.innerHTML = '✔️';
//     return true;
// }

// function validatePhone(){
//     let phone = document.getElementById('contact-phone').value;

//     if(phone.length == 0) {
//         phoneError.innerHTML = 'Phone is required';
//         return false;
//     }
//     if(phone.length !== 12){
//         phoneError.innerHTML = 'Please, write full phone';
//         return false;
//     }
//     if(!phone.match(/^[0-9]{12}$/)){
//         phoneError.innerHTML = 'Write correct number';
//         return false;
//     }
//     phoneError.innerHTML = '✔️';
//     return true;
// }

// function validateEmail() {
//     let email = document.getElementById('contact-email').value;

//     if(email.length == 0){
//         emailError.innerHTML = 'Email is required';
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         emailError.innerHTML = 'Email invalid';
//         return false;
//     }
//     emailError.innerHTML = '✔️';
//     return true;
// }

// function validateMessage() {
//     let message = document.getElementById('contact-message').value;
//     let requiredMessage = 30;
//     let left = requiredMessage - message.length;

//     if(left > 0) {
//         messageError.innerHTML = left + 'more characters required';
//         return false;
//     }
//     messageError.innerHTML = '✔️';
//     return true;
// }

// function validateForm() {
//     if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
//         submitError.style.display = 'block';
//         submitError.innerHTML = 'Please, fill in all fields❗️';
//         setTimeout(function(){submitError.style.display = 'none';}, 3000);
//         return false;
//     }
// }