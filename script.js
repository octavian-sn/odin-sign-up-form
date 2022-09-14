const password = document.querySelector('#pass');
const confirmPass = document.querySelector('#confirm');

confirmPass.addEventListener('input', checkMatch);

function checkMatch() {
    if (confirmPass.value !== password.value) {
        confirmPass.style.backgroundColor = 'red';
    }
    if (confirmPass.value === password.value) {
        confirmPass.style.backgroundColor = 'white';
    }
}