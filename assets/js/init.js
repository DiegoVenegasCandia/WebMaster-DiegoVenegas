"use strict";


window.addEventListener('load', () => {

    console.log("Ancho:" + screen.width + " Largo: " + screen.height);


    let pie_pagina = document.querySelector(".pie_pagina");
    let spp = document.querySelector(".spp");

    // function cargaPagina() {

    //     // var pantalla = document.querySelector("body");

    //     // var pStyle = pantalla.style;

    //     var tiempo;

    //     tiempo = setTimeout(() => {

    //         $("body").animate({
    //             opacity: "1",
    //             transition: "all 500ms",
    //             background: "whitesmoke"
    //         });

    //     }, 1000);
    // }


    function mostrarPiePagina() {


        let scrollTopd = document.documentElement.scrollTop;

        console.log(scrollTopd);

        var pieStyle = pie_pagina.style;
        var spanPiePagina = spp.style;

        let altura = pie_pagina.offsetTop;
        if (scrollTopd >= 1900) {

            pieStyle.opacity = 1;
            spanPiePagina.opacity = 1;

            console.log(altura);
            console.log(scrollTopd);
        }

        if (scrollTopd <= 1890) {

            pieStyle.opacity = 0;
            spanPiePagina.opacity = 0;
        }

    }

    window.addEventListener("scroll", mostrarPiePagina);

    function animate_text() {

        var animateSpan = $('.animation_text_word');

        animateSpan.typed({
            strings: ["Back-End Developer", "Front-End Developer", "Full-Stack Developer", "SOA Engineer", "Analyst Developer"],
            loop: true,
            startDelay: 1e3,
            backDelay: 2e3
        });
    }

    function menuScroll() {

        $('#scroll_inicio').on('click', function() {
            $('html,body').animate({ scrollTop: 0 }, 1000);
        });


        $('#scroll_sobre_mi').on('click', function() {
            $('html,body').animate({ scrollTop: 935 }, 1000);
        });

    }


    function preloader() {

        var preloader = $(".preloader");
        var cuerpo = $(".content");
        var tiempo = setTimeout(() => {

            clearTimeout(tiempo);

            preloader.animate({ "opacity": "0" });
            preloader.animate({ "transition": "all 500ms ease" });
            preloader.css({ "display": "none" });

            cuerpo.animate({ "opacity": "1" });
            cuerpo.animate({ "transition": "all 500ms ease" });
            cuerpo.css({ "display": "block" });

        }, 3000);

        return tiempo;

    }

    preloader();
    // cargaPagina();
    animate_text();
    mostrarPiePagina();
    menuScroll();
});