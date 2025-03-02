
document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelector(".button-like");
    const startButton = document.querySelector("#startButton");

    likeButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        likeButton.classList.toggle("liked");
    });

    startButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        addWorkoutToList();
    });
});

function addWorkoutToList() {
    const type = document.getElementById('type').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;
    const date = document.getElementById('dateOfWorkout').value;
    const areaOfFocus = document.getElementById('areaOfFocus').value;

    const newWorkout = { type, duration: parseInt(duration), calories: parseInt(calories), date, areaOfFocus };

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(newWorkout);

    localStorage.setItem('workouts', JSON.stringify(workouts));
    alert('Workout added successfully!');

}