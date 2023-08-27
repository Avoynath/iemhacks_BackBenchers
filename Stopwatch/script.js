// Define variables
let startTime = 0;
let running = false;
let interval;

// Convert time to hh:mm:ss format
function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the display with the current time
function updateDisplay() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('display').textContent = formatTime(currentTime);
}

// Start the stopwatch
document.getElementById('start').addEventListener('click', function () {
    if (!running) {
        startTime = Date.now() - (startTime > 0 ? startTime : 0);
        running = true;
        interval = setInterval(updateDisplay, 1000);
    }
});

// Stop the stopwatch
document.getElementById('stop').addEventListener('click', function () {
    if (running) {
        clearInterval(interval);
        running = false;
    }
});
