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
    const workoutName = document.getElementById('workoutName');
    const activityName = document.getElementById('activity');
    const description = document.getElementById('description');

    const timerValue = timerInput.value;
    const workoutNameValue = workoutName.value;
    const activityValue = activityName.value;
    const descriptionValue = description.value;

    const [minutes, seconds] = timerValue.split(':');
    console.log('Minutes:', minutes);
    console.log('Seconds:', seconds);

    totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);

    // issue
    if (isNaN(totalSeconds)) {
        totalSeconds = 0;
        console.log('Total seconds:', totalSeconds);
    }

    const displayTimer = document.getElementById('displayTimer');
    displayTimer.textContent = `${minutes} : ${seconds}`;

    interval = setInterval(updateCountdown, 1000);

    console.log(activityValue);
    console.log(descriptionValue);

    // have to update the value
    const workoutNameItem = document.getElementById('workoutNameItem');
    workoutNameItem.textContent = workoutNameValue;

    displayWorkout(workoutNameValue, activityValue, descriptionValue, minutes, seconds);

    clearInputFields(workoutName, timerInput, activityName, description);
}

const submitActivityButton = document.getElementById('submitActivityButton');
submitActivityButton.addEventListener("click", submitActivity);

function clearInputFields(workoutName, timerInput, activityName, description) {
    workoutName.value = '';
    timerInput.value = '';
    activityName.value = '';
    description.value = '';
}

function displayWorkout(workoutNameItem, activity, description, minutes, seconds) {
    const workoutGrid = document.querySelector('.workoutGrid');

    // create new row for workout
    const workoutRow = document.createElement('section');
    workoutRow.classList.add('workoutRow');

    const activityItem = document.createElement('span');
    activityItem.textContent = activity;

    const descriptionItem = document.createElement('span');
    descriptionItem.textContent = description;

    const durationItem = document.createElement('span');
    durationItem.textContent = `${minutes} : ${seconds}`;

    const editItem = document.createElement('button');
    editItem.textContent = 'Edit';

    // append elements to row
    workoutRow.appendChild(activityItem);
    workoutRow.appendChild(descriptionItem);
    workoutRow.appendChild(durationItem);
    workoutRow.appendChild(editItem);

    // append row to grid
    workoutGrid.appendChild(workoutRow);
}

function clearCustomWorkoutBuilder() {
    const workoutNameItem = document.getElementById('workoutNameItem');
    workoutNameItem.textContent = '';
    const workoutGrid = document.querySelector('.workoutGrid');
    const workoutRows = document.querySelectorAll('.workoutRow');
    workoutRows.forEach(row => workoutGrid.removeChild(row));
}

saveCustomWorkoutButton.addEventListener("click", function () {
    const workoutNameItem = document.getElementById('workoutNameItem').textContent;
    displaySelectCustomWorkout(workoutNameItem);
    clearCustomWorkoutBuilder();
});

function displaySelectCustomWorkout(workoutName) {
    const customWorkoutGrid = document.querySelector('.customWorkoutGrid');

    const customWorkoutRow = document.createElement('section');
    customWorkoutRow.classList.add('customWorkoutRow');

    const customWorkoutSelector = document.createElement('button');
    customWorkoutSelector.textContent = workoutName;

    customWorkoutRow.appendChild(customWorkoutSelector);
    customWorkoutGrid.appendChild(customWorkoutRow);
}

function getWorkoutData() {
    const workoutGrid = document.querySelector('.workoutGrid');
    const workoutRows = Array.from(workoutGrid.children);
    const workoutDataList = [];

    workoutRows.forEach(row => {
        const activity = row.children[0].textContent;
        const description = row.children[1].textContent;
        const duration = row.children[2].textContent;

        const workoutData = {
            activity: activity,
            description: description,
            duration: duration
        };

        workoutDataList.push(workoutData);
    });

    console.log(workoutDataList);
}

