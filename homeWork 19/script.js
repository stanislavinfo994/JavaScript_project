const passwordInput = document.querySelector('#password-input');
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
const minLength = 8;
const errorMessage = document.querySelector('.error-message');

function validatePassword() {
    const passwordValue = passwordInput.value;

    if (!passwordValue.match(uppercaseRegex)) {
        passwordInput.setCustomValidity('Одна велика буква');
    } else if (!passwordValue.match(numberRegex)) {
        passwordInput.setCustomValidity('Одна цифра');
    } else if (!passwordValue.match(punctuationRegex)) {
        passwordInput.setCustomValidity('Один знак пунктуації');
    } else if (passwordValue.length < minLength) {
        passwordInput.setCustomValidity(`Мінімум ${minLength} символів`);
    } else {
        passwordInput.setCustomValidity('');
    }

    errorMessage.textContent = passwordInput.validationMessage;
}

passwordInput.addEventListener('input', validatePassword);
