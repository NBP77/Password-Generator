// Assignment Code

// Generate Function

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
