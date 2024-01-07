const passwordBox = document.getElementById("password");
const length=10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";
const specialChars = "!@#$%&'()~[]\"{}|<>?/\\";

const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'()~[]\"{}|<>?/\\";

function createPassword(){
    let password="";
    
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    
    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    navigator.clipboard.writeText(passwordBox.value);
}

function copyPassword(){
    var passwordValue = passwordBox.value.trim();

    if (passwordValue) {
        passwordBox.select();
        document.execCommand("copy");
        hideToastMessage();
        showToastMessage('Copied to clipboard!');
    } else {
        hideToastMessage();
        showErrorMessage('Password field is empty!');
    }
}

function showToastMessage(message) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        document.body.removeChild(toast);
    }, 2000);
}

function hideToastMessage() {
    var toast = document.querySelector('.toast');
    if (toast) {
        document.body.removeChild(toast);
    }
}

function showErrorMessage(message) {
    var errorToast = document.createElement('div');
    errorToast.className = 'error-toast';
    errorToast.innerText = message;

    document.body.appendChild(errorToast);

    setTimeout(function () {
        document.body.removeChild(errorToast);
    }, 1000);
}