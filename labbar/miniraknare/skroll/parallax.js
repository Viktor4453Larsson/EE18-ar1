const eTargets = document.querySelectorAll(".scroll");

window.addEventListener("scroll", function(e) {
    /* Hur mycket skrollar vi? */

    eTargets.forEach(function(element) {
        var rate = element.dataset.rate;
        console.log(rate);

        element.style.transform = "translateY(" + window.pageYOffset * rate + "px)";
    });
});