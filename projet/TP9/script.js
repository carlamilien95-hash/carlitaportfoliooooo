function somme() { 
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("t3").value = c;
}
function soustraction() { 
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("t3").value = c;
}
function multiple() { 
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("t3").value = c;
}
function division() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    if (b === 0) {
        alert("Erreur : division par zéro impossible !");
        document.getElementById("t3").value = "";
    } else {
        document.getElementById("t3").value = a / b;
    }
}
function permute() { 
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("t1").value = b
    document.getElementById("t2").value = a

}
function paire() {
    var result = Number(document.getElementById("t3").value);
    if (isNaN(result)) {
        alert("Veuillez d'abord calculer un résultat !");
        document.getElementById("t4").value = "";
    } else if (result % 2 === 0) {
        document.getElementById("t4").value = "Paire";
    } else {
        document.getElementById("t4").value = "Impaire";
    }
}

function effacer() { 
    document.getElementById("t1").value = " ";
    document.getElementById("t2").value = " ";
    document.getElementById("t3").value = " ";
    document.getElementById("t4").value = " ";
}

