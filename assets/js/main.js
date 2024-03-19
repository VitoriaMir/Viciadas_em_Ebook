$(function () {

    $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "/assets/images/logo.svg");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "/assets/images/logo-2.svg");
        }
    });

    $(".navbar-nav a").on("click", function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on("click", function () {
        $(".navbar-toggler").removeClass("active");
    });

    // ==== Slide de recomendação
    document.addEventListener("DOMContentLoaded", function () {
        var slider = tns({
            container: "#tns1-ov",
            items: 1,
            slideBy: "page",
            autoplay: false,
            autoplayButtonOutput: false,
            controls: false,
            nav: true,
            responsive: {
                768: {
                    items: 1,
                    slideBy: "page",
                },
            },
        });

        // Inicializa os botões de navegação
        var navButtons = document.querySelectorAll(".tns-nav button");
        for (var i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener("click", function () {
                slider.goTo(parseInt(this.dataset.nav));
            });
        }
    });
});
