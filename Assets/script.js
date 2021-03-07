// Assignment Code

var passwordLength = prompt("How many characters would you like your password to be?")

if (passwordLength < 8 || passwordLength > 128){
  alert("Length must be 8-128")
}

if (passwordLength >= 8 && passwordLength <= 128){
  var confirmUpper = confirm("Would you like to use uppercase letters?")
  var confirmLower = confirm("Would you like to use lowercase letters?")
  var confirmNumber = confirm("Would you like to use numbers?")
  var confirmCharacters = confirm("Would you like to use special characters?")


if(confirmUpper != true && confirmLower != true && confirmNumber != true && confirmCharacters != true){
  alert("you must select at least one character type!")
}




// generateId.addEventListener('click', () => {
//   const length = lengthId.value;

//   console.log(length);
// });

// Generator Functions
function getRanLowerCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRanLowerCase()); 

function getRanUpperCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRanUpperCase());

function getRanNumber () {
  return Math.floor(Math.random() * 100);
}

console.log(getRanNumber()); 

function getRanSpecChar (){
  const special = '!"#$%&()*+,-./:;<=>?@[]\^_{|}~' ;
  return special[Math.floor(Math.random() * special.length)]
}

console.log(getRanSpecChar());




// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// // const resultId = document.getElementById('password');
// // const lengthId = document.getElementById('password');
// // const lowerCaseId = document.getElementById('password');
// // const upperCaseId = document.getElementById('password');
// // const numbersId = document.getElementById('password');
// // const specialCharId = document.getElementById('password');
// // const generateId = document.getElementById('password');




// const ranFunc = {
//   lowerCase: getRanLowerCase,
//   upperCase: getRanUpperCase,
//   number: getRanNumber,
//   specialChar: getRanSpecChar,

}