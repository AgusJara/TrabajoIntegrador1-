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
    if (email.value == '') {
        emailErr.innerText = 'Por favor complete el campo';
    }if (pass.value == ''){
        passErr.innerText = 'Por favor complete el campo';
    }else if (pass.value.length <= 6){    
        passErr.innerText = 'Debe ingresar al menos 6 caracteres';
    } else if (passConfirm.value !== pass.value){
        passConfErr.innerText ='Las contraseñas no coinciden';
    } else if (!idCheck.checked){
        errCheck.innerText = 'Tienes que aceptar los terminos y condiciones';
    } else{
        usuario.email = email.value;
        usuario.pass = pass.value;
        usuarios.push (usuario);
        this.submit();
        // console.log(usuarios);
        localStorage.setItem ("usuario", JSON.stringify(usuarios));

    }
})

email.addEventListener('input', function(){
    if (email.value !=='') {
       emailErr.style.display = 'none'
    } else{
        emailErr.style.display = 'block';
    }
})

pass.addEventListener ('input', function() {
    if (pass.value !== '' && pass.value.length > 6){
        passErr.style.display = 'none';
    } else{
        passErr.style.display = 'block';
    }
    
    // if (pass.value !== '') {
    //     passErr.style.display = 'none';
    // }if (pass.value.length <= 6){
    //     passErr.style.display = 'block';
    // } else if (pass.value.length > 6){
    //     passErr.style.display = 'none'
    // } else{
    //     passErr.style.display = 'block';
    // }
})

passConfirm.addEventListener ('input', function() {
    if (passConfirm.value == pass.value) {
        passConfErr.style.display = 'none';
    } else{
        passConfErr.style.display = 'block';
    }
})

idCheck.addEventListener ('input', function() {
    if (idCheck.checked) {
        errCheck.style.display = 'none';
    } else{
        errCheck.style.display = 'block';
    }
})