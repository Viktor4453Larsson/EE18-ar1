/* Första datorn med namnet Macintosh lanseras = 1984 */

/* Formel 1-föraren Ronnie Peterson avlider efter en olycka på italienska Monzabanan = 1978 */

/* Abba vinner Eurovisions-schlagerfestivalen med låten Waterloo = 1974 */

/* Svt introducerar tjänsten text-TV. = 1978*/

/* Stockholms tunnelbana invigs = 1950 */

/* 22-årige studenten Mark Zuckerberg grundar Facebook = 2004 */

/* FN rekommenderar ett allmänt firande av en internationell kvinnodag = 1977  */

/* Drottning Victoria av Storbritannien avlider efter 63 år på tronen. = 1901 */

/* The Simpsons "Filmen" har primär = 2007 */

/* Tyske stridspiloten "Röde Baronen" skjuts ner. = 1918 */

/* Globala variabler och konstaner*/
var frågor = [
    "Första datorn med namnet Macintosh lanseras", "Formel 1-föraren Ronnie Peterson avlider efter en olycka på italienska Monzabanan", "Abba vinner Eurovisions-schlagerfestivalen med låten Waterloo", "Svt introducerar tjänsten text-TV.", "Stockholms tunnelbana invigs", "22-årige studenten Mark Zuckerberg grundar Facebook", "FN rekommenderar ett allmänt firande av en internationell kvinnodag", "Drottning Victoria av Storbritannien avlider efter 63 år på tronen.", "The Simpsons \"Filmen\" har primär", "Tyske stridspiloten \"Röde Baronen\" skjuts ner."
];
var årtal = [
    1984, 1978, 1974, 1978, 1950, 2004, 1977, 1901, 2007, 1918
];
var slumptal, 
poäng = 0
varv = 10;

const elementKontainer = document.querySelector("kontainer");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("input");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoängRuta = document.querySelector("#poäng");
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNer = document.querySelector("#ner");


/* Skapa en funktion för att slumpa fram en ny fråga */
function nyFråga() {
    /* Slumptal mellan 0-9 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);

    elementFrågaRuta.value = frågor[slumptal];
    elementÅrtalRuta.value = "";

    /* Dölj tummarna */
    elementTummeUpp.style.display = "none";
    elementTummeNer.style.display = "none";
}
/* Körs när vi startar */
/* Kör funktionen */
nyFråga();



/* Plåcka fram en ny fråga när man trycker på nästa */
elementKnappNästa.addEventListener("click", nyFråga);

/* Korrigera om årtalet stämmer eller inte med svaret */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att korrigera om svaret är korrekt */
function kollaSvaret() {
    /* Läs av svaret */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Svaret som är rätt */
    var årtalet = årtal[slumptal];

    /* Kolla om svaret stämmer */
    if (svaret == årtalet) {
        elementTummeUpp.style.display = "block";
        elementTummeNer.style.display = "none";
        poäng++;
    

    } else {
        elementTummeNer.style.display = "block";
        elementTummeUpp.style.display = "none";

    }

    /* Skriv ut poäng */
    elementPoängRuta.value = poäng;

    /* Antal varv */
    varv--;
    if (varv == 0) {
        elementKontainer.innerHTML = "Du kunnde alla frågorna";
    } else {
        elementKontainer.innerHTML = "Tyvärr du har förlorat";
    }
}