// Assignment Code

// Links HTML element

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(upperCaseArray);

var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(lowerCaseArray);

var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberArray);

var specialCharacterArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
];
console.log(specialCharacterArray);

var potentialArray = [];
var finalPasswordArray = [];
console.log(finalPasswordArray);
// potentialArray.push(?)

// function for selecting random characters from arrays
// function randomGenerator(aryIndex){
//   var randomIndex = Math.floor(Math.random() * aryIndex.length);
//   return randomIndex;
// }

document.getElementById("password").value = doPassword();

function doPassword() {
  
  // Setting up the prompt to start the password process
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );

  // This says if the password length is less than 8 or greater than 128 an alret pops up that
  // your password length needs to be in between those numbers
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length must be 8-128");
  }

  // This goes to the next step and ask the follwing questions to confirm
  if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmUpper = confirm("Would you like to use uppercase letters?");
    var confirmLower = confirm("Would you like to use lowercase letters?");
    var confirmNumber = confirm("Would you like to use numbers?");
    var confirmSpecialCharcters = confirm(
      "Would you like to use a special character?"
    );
    // requires randomization
  }

  // // If none of those choices are selected then an alert pops up

  if(confirmUpper != true && confirmLower != true && confirmNumber != true && confirmSpecialCharcters != true){
    alert("you must select at least one character type!")
  };

  if (confirmUpper) {
    potentialArray = potentialArray.concat(upperCaseArray);
  }
  if (confirmLower) {
    potentialArray = potentialArray.concat(lowerCaseArray);
  }
  if (confirmNumber) {
    potentialArray = potentialArray.concat(numberArray);
  }
  if (confirmSpecialCharcters) {
    potentialArray = potentialArray.concat(specialCharacterArray);
  }
  console.log(passwordLength);
  var randomCharacter;
  for (var i = 0; i < passwordLength; i++) {
    randomCharacter =
      potentialArray[Math.floor(Math.random() * potentialArray.length)];
    console.log(randomCharacter);

    finalPasswordArray.push(randomCharacter);
  }

  console.log(finalPasswordArray);

  return finalPasswordArray.join("");
}

console.log("!!!!");


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);