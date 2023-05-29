const result = document.getElementById("result");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const temp = form[0].value;
    
    const res = (temp * (9 / 5)) + 32;
    
    result.innerHTML = "Temperature in Farenheit " + res.toFixed(2) + "F";
});