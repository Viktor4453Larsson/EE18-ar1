const eTargets = document.querySelectorAll(".scroll");

window.addEventListener("scroll", function(e) {
    /* Hur mycket skrollar vi? */

    eTargets.forEach(function(element) {
        
        var rate = element.dataset.rate;

        element.style.transform = "translate3d(" + distance + "px, " + window.pageYOffset + "px, 0px)";
})
})