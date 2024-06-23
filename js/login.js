
//AGREGUE EL CODIGO DEL LOCALSTORAGE 
//NO CAMBIAR NI BORRAR
//SOLO CAMBIAR LAS VALIDACIONES DE ABAJO, POR EJEMPLO: EMAIL.

let form = document.querySelector ('form');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');
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


document.addEventListener ('DOMContentLoaded', function () {
    let pass = document.querySelector('#password');
    let passErr = document.querySelector ('.passErr');
    
    pass.addEventListener ('input', function() {
        if (pass.value == ''){
            passErr.innerText ='Por favor complete el campo';
        } else if (pass.value.length <= 6){
            passErr.innerText ='Debe ingresar al menos 6 caracteres';
        } else {
            passErr.innerText = '';
        }
    })
    
    email.addEventListener('input', function(){
        if (email.value =='') {
           emailErr.innerText = 'Por favor complete el campo';
        } else{
            emailErr.innerText = '';
        }
    })
    
    })

    