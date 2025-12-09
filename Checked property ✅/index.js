const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const amexBtn = document.getElementById("amexBtn");
const mySubmit = document.getElementById("mySubmit");
const checkResult = document.getElementById("checkResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    
    if(myCheckbox.checked){
checkResult.textContent=`you are Subscribe `;
console.log(`${myCheckbox.checked}`)

    }
    else{
        checkResult.textContent=`you are not Subscribe`;
        console.log(`${myCheckbox.checked}`);
        
    }
    
    if(visaBtn.checked){
        paymentResult.textContent=`you are paying with visa`;
        console.log(`Visa`);
    }
    else if (mastercardBtn.checked){
        paymentResult.textContent=`you are paying with Master Card`;
        console.log(`You are paying with Master Card`);
    }
    else if (amexBtn.checked){
        paymentResult.textContent=`you are paying with American Express`;
        console.log(`you are paying with American Express`);
    }
    else {
        paymentResult.textContent=`You must choose a payment method.`;
        console.log(`You must choose a payment method.`);
    }

    
}

