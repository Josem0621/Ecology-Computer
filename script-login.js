// login.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura de datos del formulario
    const correoIngresado = document.getElementById("login-correo").value;
    const contrasenaIngresada = document.getElementById("login-contrasena").value;

    // Recupera los datos del usuario almacenados en Local Storage
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioRegistrado) {
        alert("No se encontraron datos de usuario. Por favor, registre una cuenta primero.");
        return;
    }

    // Verifica las credenciales
    if (correoIngresado === usuarioRegistrado.correo && contrasenaIngresada === usuarioRegistrado.contrasena) {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        // Redirige a la página principal
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
});