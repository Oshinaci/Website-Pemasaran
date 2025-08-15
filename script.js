// Animasi reveal saat scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal, .reveal-img");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("opacity-100", "translate-y-0");
            reveals[i].classList.remove("opacity-0", "translate-y-4");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
