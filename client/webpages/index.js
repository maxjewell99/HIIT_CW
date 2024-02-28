let totalSeconds;
let interval;

function updateCountdown() {
    if (totalSeconds === 0) {
        clearInterval(interval);
        const displayTimer = document.getElementById('displayTimer');
        displayTimer.textContent = "Time's up!";
        return;
    }

    totalSeconds--;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const displayTimer = document.getElementById('displayTimer');
    displayTimer.textContent = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
}


function submitActivity() {
    const timerInput = document.getElementById('timerInput');
    const activityName = document.getElementById('activity');
    const description = document.getElementById('description');

    const timerValue = timerInput.value;
    const activityValue = activityName.value;
    const descriptionValue = description.value;

    const [minutes, seconds] = timerValue.split(':');
    console.log('Minutes:', minutes);
    console.log('Seconds:', seconds);

    totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);

    const displayTimer = document.getElementById('displayTimer');
    displayTimer.textContent = `${minutes} : ${seconds}`;

    interval = setInterval(updateCountdown, 1000);

    console.log(activityValue);
    console.log(descriptionValue);

    activityOutput.textContent = `Activity: ${activityValue}`;
    descriptionOutput.textContent = `Description: ${descriptionValue}`;
}

const submitActivityButton = document.getElementById('submitActivityButton');
submitActivityButton.addEventListener("click", submitActivity);