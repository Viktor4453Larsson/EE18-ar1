/* Element vi använder */
const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");
const elementKnappPlus = document.querySelector("#plus");
const elementKnappMinus = document.querySelector("#minus");
const elementKnappGånger = document.querySelector("#gånger");
const elementKnappDividerat = document.querySelector("#dividerat");
const elementRutaResultat = document.querySelector("#resultat");

/* Lyssna på om man klcikar på + knappen */
elementKnappPlus.addEventListener("click", summera);

function summera() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);
    /* Räkna ut av tal 1 + tal 2 */
    var summa = tal1 + tal2;
    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

/* Lyssna på om man klcikar på - knappen */
elementKnappMinus.addEventListener("click", subtraktion);

function subtraktion() {
    /* Läs av tal1 och tal2 */
    var tal3 = Number(elementRutaTal1.value);
    var tal4 = Number(elementRutaTal2.value);
    /* Räkna ut tal 1 - tal 2 */
    var subtraktion = tal1 - tal2;
    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = subtraktion;
}

/* Lyssna på om man klcikar på * knappen */
elementKnappGånger.addEventListener("click", multiplikation);

function multiplikation() {
    /* Läs av tal1 och tal2 */
    var tal5 = Number(elementRutaTal1);
    var tal6 = Number(elementRutaTal2);
    /* Räkna ut tal 1 * tal 2 */
    var multiplikation = tal1 * tal2;
    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = multiplikation;
}


/* Lyssna på om man klcikar på / knappen */
elementKnappDividerat.addEventListener("click", dividera);

function dividera() {
    /* Läs av tal1 och tal2 */
    var tal7 = Number(elementRutaTal1);
    var tal8 = Number(elementRutaTal2);
    /* Räkna ut tal 1 / tal 2 */
    var dividera = tal1 / tal2;
    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = dividera;
}