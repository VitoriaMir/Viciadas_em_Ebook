$(function () {
    var imagePath = window.location.pathname.indexOf("/pages/") !== -1
        ? "../images/"
        : "assets/images/";

    $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop(); // Retorna a posição do scroll
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", imagePath + "logo.svg");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", imagePath + "logo-2.svg");
        }
    });

    $(".navbar-toggler").on("click", function () {
        var menu = document.querySelector($(this).attr("data-target"));
        var isOpen = $(this).hasClass("active");

        $(this).toggleClass("active", !isOpen);
        $(this).attr("aria-expanded", !isOpen);
        $(this).attr("aria-label", isOpen ? "Abrir menu de navegação" : "Fechar menu de navegação");
        $(menu).toggleClass("show", !isOpen);
    });

    function closeNavigation() {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").removeClass("active").attr("aria-expanded", "false").attr("aria-label", "Abrir menu de navegação");
    }

    $(".navbar-nav a").on("click", closeNavigation);

    $(document).on("click", function (event) {
        if (!$(event.target).closest(".navbar").length) {
            closeNavigation();
        }
    });

    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    // ==== Slide de recomendação
    document.addEventListener("DOMContentLoaded", function () {
        var sliderContainer = document.querySelector("#tns1-ov");
        if (!sliderContainer || typeof tns !== "function") {
            return;
        }

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
