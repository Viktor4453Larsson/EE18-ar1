/**
 * @todo prova slumpa frm aktiviteter från en array
 */

/* Globala variabler */


/* Globala konstanter */
var elementPromenad = document.querySelector("#promenad");
var elementJogging = document.querySelector("#jogging");
var elementStyrka = document.querySelector("#styrka");
var elementTrappor = document.querySelector("#trappor");
var elementKnapp = document.querySelector("button");
var elementLista1 = document.querySelector(".lista1");
var elementLista2 = document.querySelector(".lista2");
var elementTyngsta = document.querySelector(".tyngsta");

/* Lyssna på knappen */
/* Använd addeventlisener */

elementKnapp.addEventListener("click", function() {
    /* Varna användaren om hen glömmer fylla i ett fält */
    /* Skriv ut en text som säger att ett fält är tomt */

    if (elementPromenad.value == "" || elementJogging.value == "" || elementStyrka.value == "" || elementTrappor.value == "") {
        elementLista1.innerHTML = "Tomt fält!";
    } else {


        var promenad = Number(elementPromenad.value);
        var joggning = Number(elementJogging.value);
        var styrka = Number(elementStyrka.value);
        var trappor = Number(elementTrappor.value);
        var totalTid = (promenad + styrka + trappor + joggning) * 30;

        /* Skriv ut Total tid  */
        /* Räknar bara ihop value för tid */
        elementLista1.innerHTML = totalTid + "min";

        var totalKalorier = promenad * 107 + joggning * 240 + styrka * 350 + trappor * 540;

        /* Skriv ut total antal kalorier */
        /* Första aktivitet + andra aktivitet + tredje aktivitet + fjärde aktivitet summerat */
        elementLista2.innerHTML = totalKalorier + "kcal";

        /* Skriv ut aktiviteten som förbrukar mest kalorier */
        /* Någon slags array jämförelse Math? */

        var storst = 0;
        var aktiviteten = "";

        if (promenad * 107 > jogging * 240) {
            storst = promenad * 107;
            aktiviteten = "promenad";
            console.log(storst);

        } else {
            storst = joggning * 240;
            aktiviteten = "joggning";
            console.log(storst);
        }

        if (storst < styrka * 350) {
            storst = styrka * 350;
            aktiviteten = "styrka";
            console.log(storst);
        }

        if (storst < trappor * 540) {
            storst = trappor * 540;
            aktiviteten = "trappor";
            console.log(storst);
        }

        elementTyngsta.innerHTML = "Aktiviteten " + aktiviteten + " förbrukar " + storst + " kcal";
    }
})