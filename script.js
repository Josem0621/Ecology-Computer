document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura de datos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Creación de objeto de usuario
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        genero: genero,
        edad: edad,
        correo: correo,
        contrasena: contrasena,
    };

    // Almacenamiento en Local Storage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Confirmación al usuario
    alert("¡Cuenta creada exitosamente!");
    this.reset(); // Limpia el formulario
    window.location.href = "Inicio.html";
});






function scrollCarousel(direction) {
    const carousel = document.querySelector(".reviews-carousel");
    const scrollAmount = 300; // Desplazamiento en píxeles
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
