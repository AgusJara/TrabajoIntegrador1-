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

