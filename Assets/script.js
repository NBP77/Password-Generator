// Assignment Code


// Setting up the prompt to start the password process
var passwordLength = prompt("How many characters would you like your password to be?")

// This says if the password length is less than 8 or greater than 128 an alret pops up that
// your password length needs to be in between those numbers
if (passwordLength < 8 || passwordLength > 128){
  alert("Length must be 8-128")
}


if (passwordLength >= 8 && passwordLength <= 128){
  var confirmUpper = confirm("Would you like to use uppercase letters?")
  var confirmLower = confirm("Would you like to use lowercase letters?")
  var confirmNumber = confirm("Would you like to use numbers?")
  var confirmCharacters = confirm("Would you like to use special characters?")
}

if(confirmUpper != true && confirmLower != true && confirmNumber != true && confirmCharacters != true){
  alert("you must select at least one character type!")
};

// DOM Elements 

const resultEl = document.getElementById('password'); 

document.getElementById('generate').addEventListener('click', () => {
  const hasLower = confirmLower.true;
  const hasUpper = confirmUpper.true;
  const hasNumber = confirmNumber.true;
  const hasChar = confirmCharacters.true;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasChar, length);
});

const ranFunc = {
  lowerCase: getRanLowerCase,
  upperCase: getRanUpperCase,
  number: getRanNumber,
  specialChar: getRanSpecChar

}

function generatePassword(lowerCase, upperCase, number, specialChar, length) {
  let generatedPassword = '';
  const typesCount = lowerCase + upperCase + number + specialChar;
  const typesArr = [{lowerCase}, {upperCase}, {number}, {specialChar}].filter(item => Object.values(items)[0]);

// Loop

    for(let i=0; i<length; i+=typesCount) {
          typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += ranFunc[funcName]();
          });
    }

      const finalPassword = generatedPassword.slice(0, length);

      return finalPassword;

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










