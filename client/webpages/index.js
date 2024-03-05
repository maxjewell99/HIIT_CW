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

    displayWorkout(activityValue, descriptionValue, minutes, seconds);

    // Clear input fields after adding the workout
    timerInput.value = '';
    activityName.value = '';
    description.value = '';
}

const submitActivityButton = document.getElementById('submitActivityButton');
submitActivityButton.addEventListener("click", submitActivity);


function displayWorkout(activity, description, minutes, seconds) {
    const workoutGrid = document.querySelector('.workoutGrid');

    // Create new row for the workout
    const workoutRow = document.createElement('section');
    workoutRow.classList.add('workoutRow');

    const activityItem = document.createElement('span');
    activityItem.textContent = activity;

    const descriptionItem = document.createElement('span');
    descriptionItem.textContent = description;

    const durationItem = document.createElement('span');
    if (parseInt(minutes) === 0 && parseInt(seconds) === 0) {
        durationItem.textContent = '0 : 00';
    } else {
        durationItem.textContent = `${minutes} : ${seconds}`;
    }

    const editItem = document.createElement('span');
    editItem.textContent = 'Edit';

    // Append elements to the row
    workoutRow.appendChild(activityItem);
    workoutRow.appendChild(descriptionItem);
    workoutRow.appendChild(durationItem);
    workoutRow.appendChild(editItem);

    // Append row to the grid
    workoutGrid.appendChild(workoutRow);
}


