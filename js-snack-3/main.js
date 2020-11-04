// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function() {

    // Creo una array di oggetti
    const mezzi = [
        {
            nome: "auto",
            codice: "aaa",
            prezzo: 10.000,
        },
        {
            nome: "moto",
            codice: "bbb",
            prezzo: 5.000,
        },
        {
            nome: "bici",
            codice: "ccc",
            prezzo: 500,
        }
    ];

    console.log(mezzi);

    // const nuovi_mezzi = {...mezzi,posizione:getRandomChar()};
    //
    // console.log(nuovi_mezzi);



    // // Creo un array nuovo per salvare i nomi scelti
    // const nuovi_mezzi = [];
    //
    // // Creo un ciclo foreach per ciclare tutti gli elementi dell'array nomi e salvarli nel nuovo array
    // mezzi.forEach((item, index) => {
    //     nuovi_mezzi.push(item);
    // });
    //
    // console.log(nuovi_mezzi);


    const nuovi_mezzi = mezzi.map((item) => {

        const copia_item = {
            ...item,
            posizione: getRandomChar()
        };

        return copia_item;
    });

    console.log(nuovi_mezzi);
});



// Funzione che estrae una lettera casuale dall'alfabeto
function getRandomChar() {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    // Numero casuale tra 0 e 25 (lettere sono 26)
    var posizione = getRndInteger(0, 25);
    // Genero la lettera casuale
    var lettera_casuale = alfabeto.charAt(posizione);
    return lettera_casuale;
}

// Funzione che estrae un numero casuale che mi serve per estrarre la lettara casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
