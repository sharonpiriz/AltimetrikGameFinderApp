const iconoOjo = document.querySelector("#showojo");
const inputPassword = document.querySelector("#login-Password");

iconoOjo.addEventListener("click", function() {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }
    console.log(inputPassword)
})