let saludo = document.querySelector('.aheader')

let usuarioJSON = localStorage.getItem('usuarioLoggedIn');
let usuarioToParse = JSON.parse(usuarioJSON);

console.log(usuarioJSON, usuarioToParse)

if(usuarioJSON !== null) {
    saludo.innerHTML = `Bienvenido ${usuarioToParse.email}`
} else {
    saludo.innerHTML = `<div class="aheader">
     <a href="./login.html">Login</a><a href="./register.html">Register</a>
    </div>`
}