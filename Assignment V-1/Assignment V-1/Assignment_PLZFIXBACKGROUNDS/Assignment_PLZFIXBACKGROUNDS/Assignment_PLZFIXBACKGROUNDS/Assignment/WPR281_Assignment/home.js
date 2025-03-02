document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.steps, .dailyactivity, .workouts, .fitnessgoals');

    elements.forEach(element => {
        element.addEventListener('mouseover', function() {
            if (!element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        });
    });
});