const passCharacters = [
    'abcdefghijklmnopqrstuvwxyz', // lowercase letters
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ', // uppercase letters
    '0123456789', // numbers
    '!@#$%^&*()_+-=[]{}/?<>,.;:' // special characters (add or remove as needed)
]
const passwordLength = document.getElementById('length-value')
const generateBtn = document.getElementById('generate')
let optionOne = document.getElementById('pass-el-one')
let optionTwo = document.getElementById('pass-el-two')
let optionThree = document.getElementById('pass-el-three')
let optionFour = document.getElementById('pass-el-four')

function generatePassword(length){
    let passWord = ''
    for (let i=0; i < length; i++ ) {
        randCharOne = Math.floor( Math.random()* passCharacters.length)
        randCharTwo = Math.floor( Math.random()* passCharacters[randCharOne].length)
        let randomCharacter = passCharacters[randCharOne][randCharTwo]
        passWord += randomCharacter
    }
    return passWord
}

generateBtn.addEventListener('click', function(){
    if (passwordLength.value) {
        optionOne.textContent = generatePassword(passwordLength.value)
        optionTwo.textContent = generatePassword(passwordLength.value)
        optionThree.textContent = generatePassword(passwordLength.value)
        optionFour.textContent = generatePassword(passwordLength.value)
    } else {
        optionOne.textContent = generatePassword(10)
        optionTwo.textContent = generatePassword(10)
        optionThree.textContent = generatePassword(10)
        optionFour.textContent = generatePassword(10)
    }
})


// // Function to copy generated password to clipboard
// function copyPasswordToClipboard() {
//     const generatedPassword = optionOne.textContent;

//     // Create a temporary textarea to hold the password text
//     const tempTextarea = document.createElement('textarea');
//     tempTextarea.value = generatedPassword;

//     // Append the textarea to the document
//     document.body.appendChild(tempTextarea);

//     // Select the password text and copy it to the clipboard
//     tempTextarea.select();
//     document.execCommand('copy');

//     // Remove the temporary textarea from the document
//     document.body.removeChild(tempTextarea);

//     // Notify the user that the password has been copied (you can modify this part)
//     alert('Password has been copied to clipboard');
// }

// Get the copy icon element and add click event listener
const copyIcon = document.getElementById('copyIcon');
copyIcon.addEventListener('click', copyPasswordToClipboard);
