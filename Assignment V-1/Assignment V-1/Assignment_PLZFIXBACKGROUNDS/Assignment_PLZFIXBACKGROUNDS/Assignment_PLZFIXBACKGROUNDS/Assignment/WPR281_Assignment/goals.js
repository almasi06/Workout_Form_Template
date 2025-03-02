

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const goalInput = document.getElementById("goal");
    const progressInput = document.getElementById("goal-progress");
    const goalUnit = document.getElementById("goal-unit");
    const motivationMessage = document.getElementById("motivation-message");

function updateProgress() {
    let goalValue = parseInt(goalInput.value, 10);
    let progressValue = parseInt(progressInput.value, 10);
    let unit = goalUnit.value;
    let remaining = goalValue - progressValue;

    if (isNaN(goalValue) || isNaN(progressValue) || goalValue <= 0) {
        motivationMessage.textContent = "Please enter a valid goal and progress.";
        return;
    }

    let percentage = (progressValue / goalValue) * 100;
    percentage = Math.min(100, Math.max(0, percentage)); 

    progressBar.style.setProperty("--width", percentage);


    if (percentage >= 100) {
        motivationMessage.textContent = `Congratulations! You have achieved your goal of ${goalValue} ${unit}!🎉`;
    } else if (percentage >= 50) {
        motivationMessage.textContent = `Great job! Only ${remaining} ${unit} to go!`;
    } else if (percentage > 0) {
        motivationMessage.textContent = `Keep going! You only have ${remaining} ${unit} left!  `;
    } else {
        motivationMessage.textContent = "";
    }
}

document.querySelector("button").addEventListener("click", updateProgress);
});


