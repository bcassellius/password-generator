var smallLetters =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var characters = [`!`, `#`, `$`, `&`, `*`, `+`, `-`, `.`, `=`, `?`, `^`, `~`]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
function zebra(){

  var possibleCharacters = []
  
  var passwordLength = prompt ("How many characters would you like in your password? (between 8 - 128");
  console.log(typeof passwordLength)
  var length = parseInt(passwordLength);
  
  //must select a number between 8 and 128
  while (length < 8 || length > 128 ) {
    passwordLength = prompt ("That is not a valid number. Please choose a number between 8 and 128.");
  }
  console.log("we made it")
  // select which type of characters are in the password
  var lowerLetters = confirm ("Would you like to use lower case letters in your password?");
  var upperLetters = confirm ("Would you like to use upper case letters in your password?");
  var num = confirm ("Would you like to use numbers in your password?");
  var specialChar = confirm ("Would you like to use special characters in your password?");
  
  // must select characters to be in the password
  while (!lowerLetters && !upperLetters && !num && !specialChar) {
    alert ("You must select at least 1 choice for your password. Please try again.");
    
    lowerLetters = confirm ("Would you like to use lowercase letters in your password?");
    upperLetters = confirm ("Would you like to use upper case letters in your password?");
    number = confirm ("Would you like to use numbers in your password?");
    specialChar = confirm ("Would you like to use special characters in your password?");
  };
  console.log("is it there")
  
  // push selected characters from their array into a blank array
  if (lowerLetters === true) {
    possibleCharacters = possibleCharacters.concat(smallLetters); 
  };
  if (upperLetters === true) {
    possibleCharacters = possibleCharacters.concat(bigLetters); 
  };
  if (num === true) {
    possibleCharacters = possibleCharacters.concat(characters); 
  };
  if (specialChar === true) {
    possibleCharacters = possibleCharacters.concat(numbers); 
  };
  
  console.log(possibleCharacters)
  var generatedPassword = []
  
  var n = possibleCharacters.length;
  for (var i=0; i<length; i++){
    var rnum = Math.floor(Math.random() * n);
    generatedPassword.push(possibleCharacters[rnum]);
  }
  console.log(generatedPassword)
  
  var x = generatedPassword.join('');

  document.getElementById("password").innerHTML = x;
}
  
  
  
  function generatePassword() {


        var possibleCharacters = []
        
        var passwordLength = prompt ("How many characters would you like in your password? (between 8 - 128");
        console.log(typeof passwordLength)
        var length = parseInt(passwordLength);
        
        //must select a number between 8 and 128
        while (length < 8 || length > 128 ) {
          passwordLength = prompt ("That is not a valid number. Please choose a number between 8 and 128.");
        }
        console.log("we made it")
        // select which type of characters are in the password
        var lowerLetters = confirm ("Would you like to use lower case letters in your password?");
        var upperLetters = confirm ("Would you like to use upper case letters in your password?");
        var num = confirm ("Would you like to use numbers in your password?");
        var specialChar = confirm ("Would you like to use special characters in your password?");
        
        // must select characters to be in the password
        while (!lowerLetters && !upperLetters && !num && !specialChar) {
          alert ("You must select at least 1 choice for your password. Please try again.");
          
          lowerLetters = confirm ("Would you like to use lowercase letters in your password?");
          upperLetters = confirm ("Would you like to use upper case letters in your password?");
          number = confirm ("Would you like to use numbers in your password?");
          specialChar = confirm ("Would you like to use special characters in your password?");
        };
        console.log("is it there")
        
        // push selected characters from their array into a blank array
        if (lowerLetters === true) {
          possibleCharacters = possibleCharacters.concat(smallLetters); 
        };
        if (upperLetters === true) {
          possibleCharacters = possibleCharacters.concat(bigLetters); 
        };
        if (num === true) {
          possibleCharacters = possibleCharacters.concat(characters); 
        };
        if (specialChar === true) {
          possibleCharacters = possibleCharacters.concat(numbers); 
        };
        
        console.log(possibleCharacters)
        var generatedPassword = []
        
        var n = possibleCharacters.length;
        for (var i=0; i<length; i++){
          var rnum = Math.floor(Math.random() * n);
          generatedPassword.push(possibleCharacters[rnum]);
        }
        console.log(generatedPassword)
        
        var x = generatedPassword.join('');
      
      return x
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