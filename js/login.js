
//AGREGUE EL CODIGO DEL LOCALSTORAGE 
//NO CAMBIAR NI BORRAR
//SOLO CAMBIAR LAS VALIDACIONES DE ABAJO, POR EJEMPLO: EMAIL.

let form = document.querySelector ('form');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let passConfirm = document.querySelector('#passConfirm');
let idCheck = document.querySelector ('#checkbox');
let emailErr = document.querySelector ('.emailErr');
let passErr = document.querySelector ('.passErr');
let passConfErr = document.querySelector('.passConfErr');
let errCheck = document.querySelector ('.errCheck');
let usuario= {};
let usuarios=[];


form.addEventListener ('submit', function(e){
    e.preventDefault();
    if (email.value !== '' && pass.value !== '' && pass.value.length > 7 && passConfirm.value == pass.value && idCheck.checked) {
        usuario.email = email.value;
        usuario.pass = pass.value;
        usuarios.push (usuario);
        // console.log(usuarios);
        localStorage.setItem ("usuario", JSON.stringify(usuarios));
        this.submit();
    }
})


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "") {
            alert("Por favor complete el campo email");
            event.preventDefault();
            return;
        }

        if (password === "") {
            alert("Por favor complete el campo contraseña");
            event.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            event.preventDefault();
            return;
        }

        localStorage.setItem("email", email);
    });
});


