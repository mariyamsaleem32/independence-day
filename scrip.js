// Set the date we're counting down to (replace with your desired date)
const countDownDate = new Date("Aug 14, 2024 00:00:00");

// Update the countdown every 1 second
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const countdownTimer = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countDownDate - now;
    
    // Calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the corresponding buttons
    daysElement.innerHTML = `${days}d`;
    hoursElement.innerHTML = `${hours}h`;
    minutesElement.innerHTML = `${minutes}m`;
    secondsElement.innerHTML = `${seconds}s`;
    
    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownTimer);
        daysElement.innerHTML = "0d";
        hoursElement.innerHTML = "0h";
        minutesElement.innerHTML = "0m";
        secondsElement.innerHTML = "0s";
    }
}, 1000);
