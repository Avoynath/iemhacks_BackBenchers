let timerInterval;
let timerElement = document.getElementById('timer');
let minutesInput = document.getElementById('minutes');
let countdownTime = 0;
let isPaused = false;

function startTimer() {
    if (timerInterval) {
        return; // Timer is already running, prevent multiple intervals
    }

    if (minutesInput.value === '') {
        alert('Please enter the countdown time in minutes.');
        return;
    }

    countdownTime = parseInt(minutesInput.value) * 60;
    updateDisplay();
    timerInterval = setInterval(updateTimer, 1000);
    isPaused = false;
}

function pauseResumeTimer() {
    if (isPaused) {
        timerInterval = setInterval(updateTimer, 1000);
        isPaused = false;
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        isPaused = true;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    countdownTime = 0;
    updateDisplay();
    isPaused = false;
}

function updateTimer() {
    if (countdownTime <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        return;
    }

    countdownTime--;
    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    timerElement.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
