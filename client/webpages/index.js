let totalSeconds;
let interval;

// Function to update the countdown
function updateCountdown() {
    // Check if countdown is finished
    if (totalSeconds === 0) {
        clearInterval(interval);
        const displayTimer = document.getElementById('displayTimer');
        displayTimer.innerHTML = "Time's up!";
        return;
    }

    // Decrement totalSeconds
    totalSeconds--;

    // Calculate remaining minutes and seconds
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Display the updated countdown
    const displayTimer = document.getElementById('displayTimer');
    displayTimer.innerHTML = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
}


function getTimerValue() {
    // Get the input element
    const timerInput = document.getElementById('timerInput');

    // Get the value of the input field (in the format "HH:mm")
    const timerValue = timerInput.value;

    // Extract hours and minutes
    const [minutes, seconds] = timerValue.split(':');

    console.log('Minutes:', minutes);
    console.log('Seconds:', seconds);

    totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);

    const displayTimer = document.getElementById('displayTimer');
    displayTimer.innerHTML = `${minutes} : ${seconds}`;

    interval = setInterval(updateCountdown, 1000);
}


function submitActivity() {
    
    const activityName = document.getElementById('activity');
    const description = document.getElementById('description');

    const activityValue = activityName.value;
    const descriptionValue = description.value;

    console.log(activityValue);
    console.log(descriptionValue);

    activityOutput.textContent = `Activity: ${activityValue}`;
    descriptionOutput.textContent = `Description: ${descriptionValue}`;
}

