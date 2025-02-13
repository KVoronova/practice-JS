const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;

const countDownDate = new Date("Jun 1, 2025 00:00:00").getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

//Function format time
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
};

//Update Timer
function updateTimer() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if(distance < 0) {
        clearInterval(interval);
        daysEl.innerHTML = "00";
        hoursEl.innerHTML = "00";
        minutesEl.innerHTML = "00";
        secondsEl.innerHTML = "00";
        return;
    }

    const days = Math.floor(distance / MILLISECONDS_IN_DAY);
    const hours = Math.floor((distance % MILLISECONDS_IN_DAY) / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor((distance % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor((distance % MILLISECONDS_IN_MINUTE) / MILLISECONDS_IN_SECOND);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

//Turn timer
const interval = setInterval(updateTimer, 1000);

updateTimer();


//FIRST VERS

// const x = setInterval(function(){
//     let now = new Date().getTime();
//     let distance = countDownDate - now;

//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//     let seconds = Math.floor(distance % (1000 * 60) / 1000);


//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;

//     document.getElementById('days').innerHTML = days;
//     document.getElementById('hours').innerHTML = h;
//     document.getElementById('minutes').innerHTML = m;
//     document.getElementById('seconds').innerHTML = s;

//     if(distance < 0) {
//         clearInterval(x);
//         document.getElementById('days').innerHTML = "00";
//         document.getElementById('hours').innerHTML = "00";
//         document.getElementById('minutes').innerHTML = "00";
//         document.getElementById('seconds').innerHTML = "00";
//     }

// }, 1000);