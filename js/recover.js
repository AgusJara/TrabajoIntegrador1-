let formulario = document.querySelector ('form');
let emailRecuperar = document.querySelector ('#email');
let checkBoxRecuperar = document.querySelector ('#checkbox');
let emailRecuperarErr = document.querySelector('.emailRecuperarErr');
let checkBoxRecuperarErr = document.querySelector('.checkBoxRecuperarErr');
let respuestaFinal = document.querySelector('.respuestaFinal');
let linkLogin = document.querySelector('.linkLogin');

// RECUPERO DEL LOCAL STORAGE EL MAIL//

// let usuario = localStorage.getItem("usuario");
// let usuarioParse = JSON.parse(usuario);
// let infoUsuario = usuarioParse;

//-------------------------------------- // 


emailRecuperar.addEventListener ('input', function(){
     if (emailRecuperar.value == '') {
        emailRecuperarErr.innerText = 'Por favor escriba su mail';
     } else {
        emailRecuperarErr.innerText = '';
     }
})
     
checkBoxRecuperar.addEventListener ('input', function(){   
    if(!checkBoxRecuperar.checked){
        checkBoxRecuperarErr.innerText = 'Por favor acepte el campo "Quiero recuperar mi contraseña"'; 
    } else{
        checkBoxRecuperarErr.innerText = '';
     }
 })

 linkLogin.style.display = 'none';

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if (emailRecuperar.value !== '' && checkBoxRecuperar.checked) {
        respuestaFinal.innerText = 'Recibirás un email con las instrucciones para recuperar tu contraseña';
        linkLogin.style.display = 'block';
    } else {
        respuestaFinal.innerText = 'Debes completar los campos anteriores';
        linkLogin.style.display = 'none';
    }
})