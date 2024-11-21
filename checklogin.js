document.addEventListener("DOMContentLoaded", function() {
    const registerOption = document.getElementById("register");
    const loginOption = document.getElementById("login");
    const logoutOption = document.getElementById("logout");

    // Verifica si el usuario ha iniciado sesión
    const usuarioIniciado = JSON.parse(localStorage.getItem("usuarioIniciado"));

    if (usuarioIniciado && usuarioIniciado.isLoggedIn) {
        // Mostrar solo el botón de "Cerrar Sesión"
        registerOption.style.display = "none";
        loginOption.style.display = "none";
        logoutOption.style.display = "block";
    } else {
        // Mostrar solo "Registrarse" y "Iniciar Sesión"
        registerOption.style.display = "block";
        loginOption.style.display = "block";
        logoutOption.style.display = "none";
    }

    // Manejo del botón "Cerrar Sesión"
    logoutOption.addEventListener("click", function(event) {
        event.preventDefault();
        // Cerrar sesión
        localStorage.setItem("usuarioIniciado", JSON.stringify({ isLoggedIn: false }));
        alert("Has cerrado sesión exitosamente.");
        location.reload(); // Recarga la página para aplicar cambios
    });
});