let cal = document.querySelector("#calculate");
cal.addEventListener("click", bmicalculator);

function bmicalculator() {
    let height = document.querySelector("#height").value / 100; // Convert height to meters
    let weight = document.querySelector("#weight").value;
    let bmi = (weight / (height * height)).toFixed(2); // Calculate BMI and round to 2 decimal places
    let result = document.querySelector("#result");
    result.innerHTML = `<span>Your BMI: ${bmi}</span>`;
    
    let condition = document.querySelector("#condition"); // Adding this line

    if (bmi < 18.5) {
        condition.innerHTML = `<span>Underweight</span>`;
        condition.style.color = "white"; // Using 'condition' instead of 'document.querySelector("#condition")'
    }
    else if (18.5 <= bmi && bmi <= 24.9) {
        condition.innerHTML = `<span>Healthy</span>`;
        condition.style.color = "green";
    }
    else if (25 <= bmi && bmi <= 29.9) {
        condition.innerHTML = `<span>Overweight</span>`;
        condition.style.color = "yellow";
    }
    else if (30 <= bmi && bmi <= 34.9) {
        condition.innerHTML = `<span>Obese</span>`;
        condition.style.color = "DarkYellow";
    }
    else if (35 <= bmi && bmi <= 39.9) {
        condition.innerHTML = `<span>Severely Obese</span>`;
        condition.style.color = "Red";
    }
    else {
        condition.innerHTML = `<span>Morbidly Obese</span>`;
        condition.style.color = "Purple";
    }
}
