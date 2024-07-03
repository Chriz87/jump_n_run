// Aufgabe 1 Array erstellen
let meineFreunde = ["Artem", "Hamsa", "Lara", "Martina", "Rene"];

// Zugriff auf die Namen

for (let i = 0; i < meineFreunde.length; i++)

    {
        console.log(meineFreunde[i]);
}

//subtrahieren

function sub(zahlX, zahlY) {
    console.log(zahlX - zahlY);
}

const x = 1;
const y = 2;
sub(x, y);


function multi(zahlX, zahlY) {
    console.log(zahlX * zahlY);
}

const d = 3;
const f = 3;
multi(d, f);

let meineZahlen =[1, 3, 5, 7, 9, 11];
function additionListe(liste) {
    let sum = 0;
    for (let i = 0; i < liste.length; i++) {
        sum += liste[i];
    }
    return sum;
}

console.log(additionListe(meineZahlen));

function averageArray(arr) {
    let summe = additionListe(arr);
    return summe / arr.length;


}

console.log(averageArray(meineZahlen));
