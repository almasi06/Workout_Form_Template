document.addEventListener("DOMContentLoaded", function () {
  const totalWorkoutsEl = document.getElementById("total-workouts");
  const totalCaloriesEl = document.getElementById("total-calories");
  const avgDurationEl = document.getElementById("avg-duration");
  const workoutListEl = document.getElementById("exerciseList");

 
  const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
  const workouts = [...storedWorkouts];

  function updateStatistics() {
    let totalWorkouts = workouts.length;
    let totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
    let avgDuration = totalWorkouts > 0 ? 
      (workouts.reduce((sum, workout) => sum + workout.duration, 0) / totalWorkouts).toFixed(1) : 0;

    totalWorkoutsEl.textContent = totalWorkouts;
    totalCaloriesEl.textContent = totalCalories;
    avgDurationEl.textContent = avgDuration;

    const workoutTypes = [...new Set(workouts.map(w => w.type))];
    const workoutCounts = workoutTypes.map(type => 
      workouts.filter(w => w.type === type).length
    );

    const ctx = document.getElementById("workoutChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: workoutTypes,
        datasets: [{
          label: "Workouts Logged",
          data: workoutCounts,
          backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
          borderColor: "black",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

   
    workoutListEl.innerHTML = '';
    workouts.forEach(workout => {
      const listItem = document.createElement('li');
      listItem.textContent = `Type: ${workout.type}, Duration: ${workout.duration} mins, Calories: ${workout.calories} kcal, Date: ${workout.date}, Area of Focus: ${workout.areaOfFocus}`;
      workoutListEl.appendChild(listItem);
    });
  }

  updateStatistics();
});

document.getElementById('clear-storage-button').addEventListener('click', function() {
    localStorage.clear();
    alert('Local storage has been cleared.');
    location.reload(); 
});

var Type = document.getElementById("type").value;
var Cal = document.getElementById("Cal").value;

document.getElementById("startButton").onclick = function(){Update()}


 
function Update(){

  if(Type=="Running"){
    x = Cal;
  }
  else if(Type=="Cycling")
  {
    y = Cal;
  }
  else if(Type=="Cycling")
  {
    z = Cal;
  }
  
  let CalBurn =[x,y,z]

const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Running', 'Cycling', 'Strength'],
      datasets: [{
        label: '# of Votes',
        data: CalBurn,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}



