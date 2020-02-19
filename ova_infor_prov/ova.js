var elementKontainer = document.querySelector(".kontainer");
var elementH1 = document.querySelector("h1");
var elementUl = document.querySelector("ul");
var elementLi = document.querySelector("#good");
var elementLi = document.querySelector("#bad");
var elementLi = document.querySelector("#najs");
var totalSumma = 0;
var elementP = document.querySelector("p");

console.log(elementKontainer);
console.log(elementH1);

elementH1.style.color = "red";
elementLi.style.padding = "5px";

elementH1.addEventListener("click", Hejsan);
elementP.addEventListener("click", räknaUt);

function Hejsan(){
  elementH1.style.color = "green";
}

if (elementLi[0].checked == true) {
    totalSumma = totalSumma + 100;
}
if (elementLi[1].checked == true) {
   totalSumma = totalSumma + 50;
}
if (elementLi[2].checked == true) {
   totalSumma = totalSumma + 200;
}

function räknaUt(){
    var totalSumma = 0
}

elementP.textContent = "Dina val ger en kostnad på" + totalSumma + "kr.";  








