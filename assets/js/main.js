
// Starting and stopping the timer
const startButton = document.getElementsByClassName("app__control__btn")[0];
startButton.addEventListener("click", startCountdown);

const stopButton = document.getElementsByClassName("app__control__btn")[1];
stopButton.addEventListener("click", stopCountdown);


// Start countdown function
function startCountdown() {
    const hoursInput = document.getElementsByClassName("app__timer__input")[0];
    const minutesInput = document.getElementsByClassName("app__timer__input")[1];
    const secondsInput = document.getElementsByClassName("app__timer__input")[2];

    // Convert input to number type and calculate it to seconds
    let hours = Number(hoursInput.value)*3600;
    let minutes = Number(minutesInput.value)*60;
    let seconds = Number(secondsInput.value);

    let timerTime = hours + minutes + seconds;

    setInterval(() => {
        timerTime--;
    }, 1000);
}

function stopCountdown() {
    
}