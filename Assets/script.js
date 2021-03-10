// Assignment Code

// Links HTML element

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(upperCaseArray)

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCaseArray)

var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log(numberArray)

var specialCharacterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{"]
console.log(specialCharacterArray)


var potentialArray = []
var finalPasswordArray = []

// potentialArray.push(?)

function doPassword() {
document.getElementById("password").value = password;}


// Setting up the prompt to start the password process
var passwordLength = prompt("How many characters would you like your password to be?")

// This says if the password length is less than 8 or greater than 128 an alret pops up that
// your password length needs to be in between those numbers
if (passwordLength < 8 || passwordLength > 128){
  alert("Length must be 8-128")
}

// This goes to the next step and ask the follwing questions to confirm
if (passwordLength >= 8 && passwordLength <= 128){
  var confirmUpper = confirm("Would you like to use uppercase letters?")  
}
if (confirmUpper === true){
  var confirmLower = confirm("Would you like top use lowercase letters?")
}
if (confirmLower === true){
  var confirmNumber = confirm("Would you like to use numbers?")
}
if (confirmNumber === true){
  var confirmSpecialCharcters = confirm("Would you like to use a special character?")
}
// If none of those choices are selected then an alert pops up
if(confirmUpper != true && confirmLower != true && confirmNumber != true && confirmSpecialCharcters != true){
  alert("you must select at least one character type!")
};

if (confirmUpper) {
  potentialArray.push(upperCaseArray)
}
if (confirmLower) {
  potentialArray.push(lowerCaseArray)
}
if (confirmNumber) {
  potentialArray.push(numberArray)
}
if (confirmSpecialCharcters) {
  potentialArray.push(specialCharacterArray)
}

for (var i = 0; i < passwordLength.length; i++) {
// random char from potential array

// I will push random char onto finalpassword array
}

// turn final password array into a string and console log it 


// DOM Elements 

// const resultEl = document.getElementById('password'); 

// document.getElementById('generate').addEventListener('click', () => {
//   const hasLower = confirmLower.true;
//   const hasUpper = confirmUpper.true;
//   const hasNumber = confirmNumber.true;
//   const hasChar = confirmCharacters.true;
//   resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasChar, passwordLength);
// });

// // const ranFunc = {
// //   lowerCase: getRanLowerCase,
// //   upperCase: getRanUpperCase,
// //   number: getRanNumber,
// //   specialChar: getRanSpecChar

// // }

// function generatePassword(lowerCase, upperCase, number, specialChar, length) {
//   let generatedPassword = [];
//   const typesCount = lowerCase + upperCase + number + specialChar;
//   const typesArr = [{lowerCase}, {upperCase}, {number}, {specialChar}].filter(items => Object.values(items)[0]);

  
//   console.log(generatedPassword)

// // Loop

//     for(let i=0; i<length; i+=typesCount) {
//           typesArr.forEach(type => {
//             const funcName = Object.keys(type)[0];
//             generatedPassword += ranFunc[funcName]();
//           });
//     }

//       const finalPassword = generatedPassword.slice(0, length);

//       console.log(finalPassword)
      
//       return finalPassword;

      

     




// generateId.addEventListener('click', () => {
//   const length = lengthId.value;

//   console.log(length);
// });

// Generator Functions/ Random functions to get lowercase, uppercase, number and special character//

// function getRanLowerCase () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }


// console.log(getRanLowerCase()); 

// function getRanUpperCase () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// console.log(getRanUpperCase());

// function getRanNumber () {
//   return Math.floor(Math.random() * 100);
// }

// console.log(getRanNumber()); 

// function getRanSpecChar (){
//   const special = '!"#$%&()*+,-./:;<=>?@[]\^_{|}~' ;
//   return special[Math.floor(Math.random() * special.length)]
// }

// console.log(getRanSpecChar());



// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);












