

$(document).ready(function () {
    $(document).ready(function () {
        // Smooth scrolling
        $('.nav-link').click(function (e) {
            e.preventDefault();
            $("body,html").animate(
                {
                    scrollTop: $(this.hash).offset().top 
                },
                1000
            );
        });

        // nav close on click
        $('.nav-link').on("click", function () {
            $(".burger").removeClass("Burgeractive");
            $('.navbar-nav').removeClass('navbar-nav-active');
        });
    });
});