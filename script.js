function scrollCarousel(direction) {
    const carousel = document.querySelector(".reviews-carousel");
    const scrollAmount = 300; // Desplazamiento en píxeles
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
