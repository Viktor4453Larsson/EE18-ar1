/* Lista på alla element vi använder */
const elementVara = document.querySelector("#vara");
const elementPris = document.querySelector("#pris");
const elementKnapp = document.querySelector("button");
const elementLista1 = document.querySelector(".lista1");
const elementLista2 = document.querySelector(".lista2");
const elementTotal1 = document.querySelector(".total1");
const elementTotal2 = document.querySelector(".total2");

/* Globala variabler */
var summa1 = 0;
var summa2 = 0;

/* Användaren klickar på lägg till */
elementKnapp.addEventListener("click", fyllaListor);
function fyllaListor(){
    /* Läs av rutorna vara och pris */
 var vara = elementVara.value; // vara = "cola"
 var pris = Number(elementPris.value); // pris = 20 = "20"

 /* Om pris < 100 */
 if (pris <= 100) {
    /* Skriv ut vara och pris i listan små inköp ja*/
    elementLista1.innerHTML += vara + " " + pris + "kr <br>";

    /* Räkna upp summan i lista "små inköp" */
    summa1 += pris;
    elementTotal1.textContent = summa1;  
 } else {
      /* Skriv ut vara och pris i listan stora inköp ja*/ /* Nej */
      elementLista2.innerHTML += vara + " " + pris + "kr<br>";

      /* Räkna upp listan "Stora inköp" */
      summa2 += pris;

      /* Visa nya summan "stora inköp" */
      elementTotal2.textContent = summa2;
 }

 /* Om totala summa > 1000 */
 if ((summa1 + summa2) > 1000 ) {
    /* Ändra backgrundsfärg till rött */
    
 }
}
