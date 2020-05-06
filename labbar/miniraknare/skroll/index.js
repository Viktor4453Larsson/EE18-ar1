const eTargets = document.querySelectorAll(".scrollElement");

window.addEventListener("scroll", function (e) {
    /* Hur mycket skrollar vi? */
    console.log(window.pageYOffset);

    /* Vad säger eTarget och flytta den*/
   // var distance = window.pageYOffset * -0.5;
    //eTarget.style.transform = "translateY(" + distance + "px)";
    
    eTargets.forEach(function (element) {
        var distance = window.pageYOffset * -2; 
        element.style.transform = "translateY(" + distance + "px)";
    });
})