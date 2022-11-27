
var passwordLength = Number(prompt("how many characters would you like your password to contain?"));
passwordLength = parseInt(passwordLength);

if (passwordLength < 10) {
  alert ("password length must be between 10 and 64 characters");
  // add return here
}
if (passwordLength > 64) {
  alert ("password length must be between 10 and 64 characters");
  //add return here

}

confirm ("click ok to confirm including lowercase letters");
confirm ("click ok to confirm including Uppercase letters");
confirm ("click ok to confirm including Numeric letters");
confirm ("click ok to confirm including special charcaters");




// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');





function generatePassword() {
  console.log('hey, you clicked the button')
  // 1.prompt user for passwork criteria
  //  a. password length bwteen 10-64
  //  b. lowercase, uppercase, numeric, special characters




  function getRandomLowerCasedCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }

  function getRandomUppercaseCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65)); 
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48)); 
  }

  function getRandomsymbol() {
    const symbols=" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  console.log(getRandomsymbol());




  return "Generated passworld will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

