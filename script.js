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
    var length = parseInt(prompt("Enter password length"));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
    }
  
    var includeSpecial = confirm("Include special characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
  
    if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
      alert("Please select at least one character type.");
      return;
    }
    
  
    return {
      length: length,
      includeSpecial: includeSpecial,
      includeNumeric: includeNumeric,
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
    };
  }
  
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  
  // Function to generate password with user input
  function generatePassword(id) {
    var options = getPasswordOptions();
    if (!options) return; // User canceled the password generation
  
    var characters = [];
    if (options.includeSpecial) characters = characters.concat(specialCharacters);
    if (options.includeNumeric) characters = characters.concat(numericCharacters);
    if (options.includeLowercase) characters = characters.concat(lowerCasedCharacters);
    if (options.includeUppercase) characters = characters.concat(upperCasedCharacters);
  
    var password = "";
    for (var i = 0; i < options.length; i++) {
      password += getRandom(characters);
    }
  
    document.getElementById(id).value = password;
  }
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  