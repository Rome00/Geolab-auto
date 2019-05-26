const burger = document.querySelector('.burger');
const logo = document.querySelectorAll('.navbar-brand img');
const navlinks = document.querySelector('.navbar-nav');
var variable = true;
burger.addEventListener('click', () => {
    burger.classList.toggle('Burgeractive');
    navlinks.classList.toggle('navbar-nav-active');
    if (variable) {
        logo[1].classList.remove('hidden');
        variable = false;
    } else {
        logo[1].classList.add('hidden');
        variable = true;
    }
})