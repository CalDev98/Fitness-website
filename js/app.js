
/* Parallax effect */
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function() {
    parallax(".hero-text", window.scrollY, 0.4);
});