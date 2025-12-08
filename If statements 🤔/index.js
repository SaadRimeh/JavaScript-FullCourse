
const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement");
let age  ;

myBtn.onclick=function(){


age = myText.value;
age = Number(age); 
if (age >= 100){
    console.log("You are too old to enter this site");
    resultElement.textContent = "You are too old to enter this site";
}
else if (age == 0){
    console.log("you can not enter You were just born.");
    resultElement.textContent = "you can not enter You were just born.";
}
else if(age >= 18){
    console.log("You are enough to enter this site");
    resultElement.textContent = "You are enough to enter this site";
}
else if(age < 0){
    console.log("You are not born yet");
    resultElement.textContent = "You are not born yet";
}
else{
    console.log("You are not enough to enter this site");
    resultElement.textContent = "You are not enough to enter this site";
}
}

