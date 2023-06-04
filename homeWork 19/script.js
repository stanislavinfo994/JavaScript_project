const passwordInput = document.querySelector('#password-input');
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
const minLength = 8;
const uppercaseError = document.querySelector('.uppercase-error');
const numberError = document.querySelector('.number-error');
const punctuationError = document.querySelector('.punctuation-error');
const lengthError = document.querySelector('.length-error');

function validatePassword() {
    const passwordValue = passwordInput.value;

    const hasUppercase = passwordValue.match(uppercaseRegex);
    const hasNumber = passwordValue.match(numberRegex);
    const hasPunctuation = passwordValue.match(punctuationRegex);
    const hasMinLength = passwordValue.length >= minLength;

    if (hasUppercase) {
        uppercaseError.style.display = 'none';
        passwordInput.classList.remove('error-input');
    } else {
        uppercaseError.style.display = 'block';
        passwordInput.classList.add('error-input');
    }

    if (hasNumber) {
        numberError.style.display = 'none';
        passwordInput.classList.remove('error-input');
    } else {
        numberError.style.display = 'block';
        passwordInput.classList.add('error-input');
    }

    if (hasPunctuation) {
        punctuationError.style.display = 'none';
        passwordInput.classList.remove('error-input');
    } else {
        punctuationError.style.display = 'block';
        passwordInput.classList.add('error-input');
    }

    if (hasMinLength) {
        lengthError.style.display = 'none';
        passwordInput.classList.remove('error-input');
    } else {
        lengthError.style.display = 'block';
        passwordInput.classList.add('error-input');
    }
}

passwordInput.addEventListener('input', validatePassword);
