const decreaseBtn = document.getElementById('decreaseBtn');
const resetbtn = document.getElementById('resetbtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLable = document.getElementById('countLable');
let count = 0;

decreaseBtn.onclick = function() {
    count--;
    countLable.textContent = count;
}
resetbtn.onclick = function() {
    count = 0;
    countLable.textContent = count;
}   
increaseBtn.onclick = function() {
    count++;
    countLable.textContent = count;
}