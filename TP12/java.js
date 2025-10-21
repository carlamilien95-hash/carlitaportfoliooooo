function saisir_note() {
    var n1 = prompt("Donnez la première note : ");
    var n2 = prompt("Donnez la deuxième note : ");
    var n3 = prompt("Donnez la troisième note : ");

    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme : " + somme + "<br>");

    var moyenne = somme / 3;
    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Vous n'êtes pas admis ");
    } else if (moyenne < 12 ) {
        document.write("Vous êtes admis sans mention ! ");
    }
     else if (moyenne < 14 ) {
        document.write("Vous êtes admis : mention Assez Bien ! ");  
    }
     else if (moyenne < 16 ) {
        document.write("Vous êtes admis : mention Bien ! ");  
    }

     else {
        document.write("Vous êtes admis : mention Très Bien ! ");  
    }

}

function test_temperature() {
    var temps = prompt("Quel est la temperature ?");
    
    if (temps < 10) {
        document.write("Il fait froid");
        document.bgColor = "bleu";
    } else if (temps < 25) {
        document.write("Il fait bon/normal ");
        document.bgColor = "green";}
    else {
        document.write("Il fait chaud ");
        document.bgColor = "red"; }

    }

function valeur_taille() {
    var n1 = prompt("Donnez votre première valeur :");
    var n2 = prompt("Donnez votre deuxième valeur :");

    if (n1 < n2) {
      document.write("La valeur la plus grande est : " + n2 + " et la valeur la plus petite est : " + n1 + " " );  
    }
    else {
        document.write("La valeur la plus grande est : " + n1 + " et la valeur la plus petite est : " + n2 + " " );  
    
    }

}

function test_jeu() {
    var chiffreSecret = Math.floor(Math.random() * 20) + 1;
     var valeur = prompt("Entrer une valeur entre 1 et 20 : ");

     if (valeur < chiffreSecret ) {
        document.write("la valeur saisi est inferieur.   ")

     }
     else if (valeur > chiffreSecret ) {
       document.write("la valeur saisi est superieur.    ")
 
     }
     else if (valeur == chiffreSecret ) { 
        document.write("la valeur saisi est juste !!! ")} 
document.write( "    Le chiffre secret est :" + chiffreSecret )

    }
