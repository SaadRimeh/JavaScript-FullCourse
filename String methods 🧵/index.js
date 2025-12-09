const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

myBtn.onclick = function () {
    let text = document.getElementById("myInput").value;

    let trimmed = text.trim();                   // .trim()
    let firstChar = trimmed.charAt(0);           // .charAt()
    let firstIndex = trimmed.indexOf("a");       // .indexOf()
    let lastIndex = trimmed.lastIndexOf("a");    // .lastIndexOf()
    let length = trimmed.length;                 // .length
    let upper = trimmed.toUpperCase();           // .toUpperCase()
    let lower = trimmed.toLowerCase();           // .toLowerCase()

result.innerHTML = `
<b>.trim()</b>: removes spaces from the beginning and end of the string.<br>
Value → <b>${trimmed}</b><br><br>

<b>.charAt()</b>: returns the character at a specific position in the string.<br>
Value → <b>${firstChar}</b><br><br>

<b>.indexOf()</b>: finds the FIRST position of a letter or word.<br>
Value → <b>${firstIndex}</b><br><br>

<b>.lastIndexOf()</b>: finds the LAST position of a letter or word.<br>
Value → <b>${lastIndex}</b><br><br>

<b>.length</b>: shows how many characters are in the string.<br>
Value → <b>${length}</b><br><br>

<b>.toUpperCase()</b>: converts all letters to CAPITAL letters.<br>
Value → <b>${upper}</b><br><br>

<b>.toLowerCase()</b>: converts all letters to small letters.<br>
Value → <b>${lower}</b><br><br>
`;


};
