/* Element vi använder*/
const eAntal1 = document.querySelector("#antal1");
const ePlus1 = document.querySelector("#plus1");
const eMinus1 = document.querySelector("#minus1");
const ePlus2 = document.querySelector("#plus2");
const eMinus2 = document.querySelector("#minus2");
const eAntal2 = document.querySelector("#antal2");
const eFrakt = document.querySelector("#frakt");
const eRabatt = document.querySelector("#rabattkod");
const eKnapp = document.querySelector("button");
const eTotal = document.querySelector("#total");
const eBeställning = document.querySelector("#beställning");
const eSlutför = document.querySelector("#slutför");
const eSumma1 = document.querySelector("#summa1");
const eSumma2 = document.querySelector("#summa2");

/* Vad händer när man klickar på Slutför */
eSlutför.addEventListener("click", skrivUtMening);

function skrivUtMening() {

    /* Läsa av rutorna */
    var antal1 = Number(eAntal1.value);
    var antal2 = Number(eAntal2.value);
    var frakt = Number(eFrakt.value);
    var rabattKod = eRabatt.value;
    var rabatt = 0;

    eBeställning.innerHTML = "Du har beställt " + antal1 + "<strong> Infekterad Lysande Stressboll </strong>" + antal2 + " <strong>Pippa parpussel</strong>";

    if (rabattKod == "5599") {
        rabatt = 29;
    }

    /* Value kan användas för att skriva ut och in värden */
    var summa = antal1 * 39 + antal2 * 102 + frakt - rabatt;
    /* Skriv ut i den sista rutan */
    eTotal.value = summa + " kr";
}

/* Vad händer när man trycker på + (antal1) */
ePlus1.addEventListener("click", function() {
    /* Läs av rutan */
    var antal1 = Number(eAntal1.value);
    /* Addera 1*/
    antal1 = antal1 + 1;
    /* Skriv tillbaka resultatet */
    eAntal1.value = antal1;

    eSumma1.textContent = antal1 * 39;

});
eMinus1.addEventListener("click", function () {
    var antal1 = Number(eAntal1.value);

    antal1 = antal1 - 1;

    eAntal1.value = antal1;

    eSumma1.textContent = antal1 * 39;
});
/* Vad händer när man trycker på + (antal1) */
ePlus2.addEventListener("click", function() {
    /* Läs av rutan */
    var antal2 = Number(eAntal2.value);
    /* Addera 1*/
    antal2 = antal2 + 1;
    /* Skriv tillbaka resultatet */
    eAntal2.value = antal2;

    eSumma2.textContent = antal2 * 102;

});
eMinus2.addEventListener("click", function () {
    var antal2 = Number(eAntal2.value);

    antal2 = antal2 - 1;

    eAntal2.value = antal2;

    eSumma2.textContent = antal2 * 102;
});