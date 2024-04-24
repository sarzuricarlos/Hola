const cajaSi = document.querySelector("#si");
const cajaNo = document.querySelector(".no");
const cajaCita = document.querySelector(".cita");
let num1,num2,num3,num4, cont,tam;
num1 = 20;
num2 = 15;
num3 = 20;
num4 = 15;
cont = 0;
tam = 2.5;

cajaNo.addEventListener('click',()=>
{
    cont++;
    num1 = num1+0.2;
    num2 = num2+0.5;
    num3 = num3-0.2;
    num4 = num4-0.1;
    tam = tam+0.1;
    cajaCita.style.position = "relative";
    cajaSi.style.zIndex = cont;
    cajaSi.style.width = num1+"vw";
    cajaSi.style.height = num2+"vh";
    cajaSi.style.fontSize = tam+"em";
    cajaNo.style.width = num3+"vw";
    cajaNo.style.height = num4+"vh";
    if(cont==10){
        alert("Que mal yo hice :(");
        cont = 0;
    }
});