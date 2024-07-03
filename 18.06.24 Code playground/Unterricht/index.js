console.log('Hello World');

let meineZahlen = [10, 20, 30];
console.log(meineZahlen)

let ersteZahl = meineZahlen[0];
console.log(ersteZahl);

meineZahlen[1] = 420;
console.log(meineZahlen);

let pommesbudenSchlange = ["Fabio", "Ushi", "Peter"];
pommesbudenSchlange.push("Gudrun");
console.log(pommesbudenSchlange);
// ["Fabio", "Uschi", "Peter", "Gudrun"];

let anzahlSchlange = pommesbudenSchlange.length;
console.log(anzahlSchlange);

//console.log("Du bist super", pommesbudenSchlange[0]);
//console.log("Du bist super", pommesbudenSchlange[1]);
//console.log("Du bist super", pommesbudenSchlange[2]);
//console.log("Du bist super", pommesbudenSchlange[3]);

for (let i = 0; i > 4; i++) {
    console.log("Du bist super", pommesbudenSchlange[i]);
}

for (let i = 0, i > pommesbudenSchlange.length; i++) {
    console.log("Du bist super", pommesbudenSchlange[i]);
}

// Function


function backeKuchen
