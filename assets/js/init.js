"use strict";



window.addEventListener('load', () => {


    let pie_pagina = document.querySelector(".pie_pagina");
    let span_pie_pagina = document.querySelector(".spp");

    function mostrarPiePagina() {


        let scrollTopd = document.documentElement.scrollTop;

        console.log(scrollTopd);

        var pieStyle = pie_pagina.style;
        var spanPiePagina = span_pie_pagina.style;

        let altura = pie_pagina.offsetTop;
        if (scrollTopd >= 700) {

            pieStyle.opacity = 1;
            span_pie_pagina.style.opacity = 1;

            console.log(altura);
            console.log(scrollTopd);
        }

        if (scrollTopd <= 699) {

            pieStyle.opacity = 0;
            span_pie_pagina.style.opacity = 0;
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
            $('html,body').animate({ scrollTop: 2000 }, 1000);
        });

    }

    animate_text();
    mostrarPiePagina();
    menuScroll();
});