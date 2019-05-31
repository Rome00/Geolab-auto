const burger = document.querySelector('.burger');
const logo = document.querySelectorAll('.navbar-brand img');
const navlinks = document.querySelector('.navbar-nav');
const link = document.querySelector('.nav-link');
var variable = true;
burger.addEventListener('click', () => {
    burger.classList.toggle('Burgeractive');
    navlinks.classList.toggle('navbar-nav-active');
    link.classList.toggle('nav-link-active');
    if (variable) {
        logo[1].classList.remove('hidden');
        variable = false;
    } else {
        logo[1].classList.add('hidden');
        variable = true;
    }
})

$(document).ready(function () {
    $('form').submit(function (e) {
        var name = 0;
        var mail = 0;
        var subject = 0;
        var text = 0;
        if ($("#name").val() === "") {
            $('#span-name').css("opacity", 1);
            name = 1;
        } else {
            $('#span-name').css("opacity", 0);
            errormessige = 0;
        }
        if ($("#mail").val() === "") {
            $('#span-mail').css("opacity", 1)
            mail = 1;

        } else {
            $('#span-mail').css("opacity", 0);
            mail = 0;
        }
        if ($("#subject").val() === "") {
            $('#span-subject').css("opacity", 1)
            suject = 1;

        } else {
            $('#span-subject').css("opacity", 0);
            subject = 0;
        }
        if ($("#textarea").val() === "") {
            $('#span-text').css("opacity", 1)
            text = 1;

        } else {
            $('#span-text').css("opacity", 0);
            text = 0;
        }
        if (name == 0 && mail == 0 && subject == 0 && text == 0) {
            $('#success').css('opacity', 1);
            return;
        }
        e.preventDefault();
    });
});