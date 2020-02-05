/* Start */
/* Element vi använder */

const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="tillägg"]');
const elementKampanjKod = document.querySelector("#kampanjkod");
const elementKnapp = document.querySelector("button");
const elementP = document.querySelector('p');


elementKnapp.addEventListener("click", räknaUt)
/* Räkna ut kostnaden */
function räknaUt() {
    var kostnad = 0,
        rumspris;





    /* Val av rum */


    /*  console.log(elementRum[0].checked);
    console.log(elementRum[1].checked);
    console.log(elementRum[2].checked);*/

    /*   console.log(elementRum[0].value);
     console.log(elementRum [1].value);
     console.log(elementRum [2].value); hittar värdet*/

    /*   console.log(elementRum[0]);
     console.log(elementRum [1]);
     console.log(elementRum [2]); */

    if (elementRum[0].checked == true) {
        rumspris = 300;
    }
    if (elementRum[1].checked == true) {
        rumspris = 450;
    }
    if (elementRum[2].checked == true) {
        rumspris = 800;
    }

    /* Läsa av vad användaren väljer */
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter;

    /* console.log(kostnad); */

    /* Vilka tillägg har valts? */

    if (elementTillägg[0].checked == true) {
        kostnad = kostnad + 50;
    }
    if (elementTillägg[1].checked == true) {
        kostnad = kostnad + 300;
    }
    if (elementTillägg[2].checked == true) {
        kostnad = kostnad + 100;
    }
   /*  console.log(kostnad); */

   /* Har vi en kampanjkod? */
   var kampanjkod = elementKampanjKod.value;
   /*  console.log(antalNätter, kampanjkod);*/
if (kampanjkod == "sportlov20") {
    kostnad = kostnad * 0.9;
}
if (kampanjkod == "sommar2019") {
    kostnad = kostnad * 0.75;
}
if (kampanjkod == "nti") {
    kostnad = kostnad * 0.6;
}

    
}
/* Visa kostnad */
elementP.textContent = "Dina val ger en kostnad på" + kostnad + "kr.";
/* Slut */