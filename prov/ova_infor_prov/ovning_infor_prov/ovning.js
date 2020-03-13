/* Alla element i koden */

const elementAngeTal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");
const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

/* Knappar i koden och dess funktioner */

elementSkicka.addEventListener("click", fruktMängd);
elementRadera.addEventListener("click", återställ);

function fruktMängd() {
    elementOutput.innerHTML = "";
    var mängd = elementAngeTal.value;
    var frukt = elementFrukt.value;

    if (mängd == "") {
        elementFel.innerHTML += "Du har inte valt antal";
    }

    if (frukt == "") {
        elementFel.innerHTML += "Du har inte valt frukt <br>";
    }

    if (frukt == "äpple" || frukt == "äpplen") {
        elementOutput.innerHTML += "";
    } else {
        elementOutput.innerHTML += "Välj äpple istället för " + frukt;
    }

    if (mängd <= 1) {
        elementOutput.innerHTML += "ett äpple";  
    }
    if (mängd >= 2) {
        elementOutput.innerHTML += "två äpplen";
    }
    if (mängd <0) {
        elementOutput.innerHTML += "Doktorn säger" + mängd + "om dagen håller doktorn borta!"
    }
    if (mängd == 0) {
        elementOutput.innerHTML += "";
    }
   
}

function återställ() {
    elementOutput.innerHTML = "";

    elementAngeTal.textContent = "";
    elementFrukt.textContent = "";
}