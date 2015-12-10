/*
var case1;
case1 = "hello";
alert(case1);
case1 = "super";
alert(case1);


var calcul = 10;
alert(calcul);// 10

calcul = calcul / 2;
alert(calcul);// 5

calcul = calcul * 3;
alert(calcul);// 15
*/

function compteur(){
      var varJSCpt = document.getElementById("pCpt");
        var nombre = parseInt(varJSCpt.innerHTML);
          varJSCpt.innerHTML = nombre + 1;
}

function afficherphoto(obj){
      console.log("function afficher photo appelée");
       if ( obj.className == "zoomImage"){
         obj.className = "";
       }
       else {
         obj.className = "zoomImage";
     }
}
