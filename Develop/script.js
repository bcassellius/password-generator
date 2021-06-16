// Assignment code here

var smallLetters =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var characters = [`!`, `#`, `$`, `&`, `*`, `+`, `-`, `.`, `=`, `?`, `^`, `~`]
var numbers = [Array.from(Array(10).keys())]
console.log (bigLetters)
console.log (smallLetters)
console.log (characters)
console.log (numbers)
possibleCharacters = []
generatedPassword = []


var passwordLength = prompt ("How many characters would you like in your password? (between 8 - 128");

console.log (passwordLength)

//must select a number between 8 and 128
while (passwordLength < 8 || passwordLength > 128 ) {
  passwordLength = prompt ("That is not a valid number. Please try again.");
}

var lowerLetters = confirm ("Would you like to use lowercase letters in your password?");

var upperLetters = confirm ("Would you like to use upper case letters in your password?");

var num = confirm ("Would you like to use numbers in your password?");

var specialChar = confirm ("Would you like to use special characters in your password?");

// must select characters to be in the password
while (!lowerLetters && !upperLetters && !number && !specialChar) {
  alert ("You must select at least 1 choice for your password. Please try again.");
  
  lowerLetters = confirm ("Would you like to use lowercase letters in your password?");

  upperLetters = confirm ("Would you like to use upper case letters in your password?");

  number = confirm ("Would you like to use numbers in your password?");

  specialChar = confirm ("Would you like to use special characters in your password?");
}

// push selected characters from their array into a blank array
if (lowerLetters === true) {
  possibleCharacters = possibleCharacters.concat(smallLetters); 
}
if (upperLetters === true) {
  possibleCharacters = possibleCharacters.concat(bigLetters); 
}
if (num === true) {
  possibleCharacters = possibleCharacters.concat(characters); 
}
if (specialChar === true) {
  possibleCharacters = possibleCharacters.concat(numbers); 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
