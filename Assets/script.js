// Assignment Code

const resultId = document.getElementById('password');
const lengthId = document.getElementById('password');
const lowerCaseId = document.getElementById('password');
const upperCaseId = document.getElementById('password');
const numbersId = document.getElementById('password');
const specialCharId = document.getElementById('password');
const generateId = document.getElementById('password');




const ranFunc = {
  lowerCase: getRanLowerCase,
  upperCase: getRanUpperCase,
  number: getRanNumber,
  specialChar: getRanSpecChar,

}

generateId.addEventListener('click', () => {
  const length = lengthId.value;

  console.log(length);
});

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




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var passwordLength = prompt("How long is you password");
// if (passwordLength == null || passwordLength == "") {
//   txt = "Password not long enough.";
// } else {
//   txt = "Do you want lowercase letters?";
// }