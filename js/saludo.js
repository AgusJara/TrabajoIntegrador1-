let saludo = document.querySelector('.aheader')

let usuarioJSON = localStorage.getItem('usuarioLoggedIn');
let usuarioToParse = JSON.parse(usuarioJSON);

console.log(usuarioJSON, usuarioToParse)

if(usuarioJSON !== null) {
    saludo.innerHTML = `<p>Bienvenido ${usuarioToParse.email}</p><a class="logout" href="./index.html">logout</a>`
} else {
    saludo.innerHTML = `<div class="aheader">
     <a href="./login.html">Login</a><a href="./register.html">Register</a>
    </div>`
}
