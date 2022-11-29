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
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

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

  // Prompt for Length of Password 
  var pwLength = (prompt("how many characters would you like your password to contain?\nMust be between 10 and 64"));

  //In case input number is smaller than 10 OR larger than 64 OR user clicked "Cancel" OR input is not numbers 
  while ((!(pwLength > 9)) || (!(pwLength < 65))) {
    alert("The password length must be at least 10 characters but no more than 64 characters.");
    var pwLength = (prompt("Please reenter the length of your password:\nBetween 10 and 64"));
  }

  // Confirm for Lowercase Characters
  var pwLowerCase = confirm("Click ok to confirm use of lowercase characters");

  // Confirm for Uppercase Characters
  var pwUpperCase = confirm("Click ok to confirm use of Uppercase characters");

  // Confirm for Numeric Characters
  var pwNumeric = confirm("Click ok to confirm use of numbers");

  // Confirm for Special Characters
  var pwSpecial = confirm("Click ok to confirm use of special characters");

  // In case user clicks Cancel for all
  while (pwLowerCase === false && pwUpperCase === false && pwNumeric === false && pwSpecial === false) {
    alert("Your password must need at least one criteria from below:\nLowercase Characters\nUppercase Characters\nNumeric Characters\nSpecial Characters");
    var pwLowerCase = confirm("Does your password needs lowercase characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
    var pwUpperCase = confirm("Does your password needs UPPERCASE characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
    var pwNumeric = confirm("Does your password needs numeric characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
    var pwSpecial = confirm("Does your password needs special characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
  }

  var pwContent = [];

  if (pwLowerCase) {
    pwContent = pwContent.concat(lowerCasedCharacters)
  }

  if (pwUpperCase) {
    pwContent = pwContent.concat(upperCasedCharacters)
  }

  if (pwNumeric) {
    pwContent = pwContent.concat(numericCharacters)
  }

  if (pwSpecial) {
    pwContent = pwContent.concat(specialCharacters)
  }

  var newPassword = "";

  for (var i = 0; i < pwLength; i++) {
    newPassword = newPassword + pwContent[Math.floor(Math.random() * pwContent.length)];
  }
  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
