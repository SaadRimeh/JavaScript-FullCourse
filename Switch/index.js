const myBtn = document.getElementById("myBtn");
const dayName = document.getElementById("dayName");

myBtn.onclick = function () {

    let myInput = Number(document.getElementById("myInput").value);

    switch (myInput) {
        case 1:
            dayName.textContent = "Monday";
            break;
        case 2:
            dayName.textContent = "Tuesday";
            break;
        case 3:
            dayName.textContent = "Wednesday";
            break;
        case 4:
            dayName.textContent = "Thursday";
            break;
        case 5:
            dayName.textContent = "Friday";
            break;
        case 6:
            dayName.textContent = "Saturday";
            break;
        case 7:
            dayName.textContent = "Sunday";
            break;
        default:
            dayName.textContent = "OUT OF RANGE";
            break;
    }
}
