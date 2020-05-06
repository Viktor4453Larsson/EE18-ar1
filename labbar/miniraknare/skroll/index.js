const eTargets = document.querySelectorAll(".scrollElement");

window.addEventListener("scroll", function(e) {
    /* Hur mycket skrollar vi? */
    console.log(window.pageYOffset);

    /* Vad säger eTarget och flytta den*/
    // var distance = window.pageYOffset * -0.5;
    //eTarget.style.transform = "translateY(" + distance + "px)";

    eTargets.forEach(function(element) {
        var rate = element.dataset.rate;

        var orientation = element.dataset.orientation;

        if (orientation == "v") {
            var distance = window.pageYOffset * rate;

            element.style.transform = "translateY(" + distance + "px)";
        } else {
        var distance = window.pageYOffset * rate;

        element.style.transform = "translate3d(" + distance + "px, " + window.pageYOffset + "px, 0px)";
}
    });
})