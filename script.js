function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* Typed .js */
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer','Software Engineer','<Coder>'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 800,
    loop: true
});
