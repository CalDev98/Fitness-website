// Menu for mobile and tablets
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
});

/* Parallax effect */
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function() {
    parallax(".hero-text", window.scrollY, 0.4);
});

