let username = window.prompt("Enter your username : ");

// ------------No method Chaining----------

// Select the text element where the formatted username will be displayed
const myText = document.getElementById("myText");

// Remove any spaces before or after the entered username
username = username.trim();

// Get the first character of the username
let letter = username.charAt(0);
// Convert the first letter to uppercase
letter = letter.toUpperCase();

// Get the rest of the characters starting from index 1
let extraChars = username.slice(1);
// Convert the remaining characters to lowercase
extraChars = extraChars.toLowerCase();

// Combine the formatted first letter with the rest of the name
username = letter + extraChars;

// Display the final formatted username
myText.textContent = username;


// ----------Method Chaining--------

// Select the second text element to show chaining result
const myTextChaining = document.getElementById("myTextChaining");

// Format the username in one line using method chaining:
// 1. trim() removes extra spaces
// 2. charAt(0).toUpperCase() makes the first character uppercase
// 3. slice(1).toLowerCase() converts the rest to lowercase
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// Display the formatted username using method chaining
myTextChaining.textContent = username;
