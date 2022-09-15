const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm');
const output = document.querySelector('output');

confirmPass.addEventListener('input', checkMatch);
password.addEventListener('input', passCheck);


function checkMatch() {
    if (confirmPass.value !== password.value) {
        confirmPass.style.borderColor = 'rgb(255, 80, 80)';
        password.style.borderColor = 'rgb(255, 80, 80)';
        output.value = "Passwords do not match"
    }
    if (confirmPass.value === password.value) {
        confirmPass.style.borderColor = 'rgb(51, 175, 57)';
        password.style.borderColor = 'rgb(51, 175, 57)';
        output.value = '';
    }
}

function passCheck() {
    if (confirmPass.value !== '') {checkMatch()};
}