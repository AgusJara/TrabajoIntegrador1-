
//AGREGUE EL CODIGO DEL LOCALSTORAGE 
//NO CAMBIAR NI BORRAR
//SOLO CAMBIAR LAS VALIDACIONES DE ABAJO, POR EJEMPLO: EMAIL.

let form = document.querySelector ('form');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let usuario= {};
let usuarios=[];


form.addEventListener ('submit', function(e){
    if (email.value !== '' && pass.value !== '' && pass.value.length >= 6) {
        usuario.email = email.value;
        usuario.pass = pass.value;
        usuarios.push (usuario);
        // console.log(usuarios);
        localStorage.setItem("usuarioLoggedIn", JSON.stringify(usuario));
    } else {
        e.preventDefault();
        if(email.value == '' && pass.value == ''){
            alert('Ingrese los datos');
        } else if(email.value == ''){
            alert('Por favor complete el campo email');
        }
         else if(pass.value == '') {
            alert('Por favor complete el campo contraseña')
        } else if(pass.value.length >=6 ){
            alert('La contraseña debe tener al menos 6 caracteres')
        }
    }
})




    