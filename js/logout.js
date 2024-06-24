
document.querySelector('.logout').addEventListener('click', function (e) {
    localStorage.removeItem("usuarioLoggedIn")
})