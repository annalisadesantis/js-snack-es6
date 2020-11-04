// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

$(document).ready(function() {

    // creo un array di oggetti contenenti bici
    let bici_corsa =
    [
       {
          nome : "bianchi-aria-disc",
          peso : 8,
       },
       {
           nome : "Bh-Quartz",
           peso : 7,
       },
       {
           nome : "B’Twin-Ultra",
           peso : 6,
       },
       {
           nome : "Cannondale-Super-Six-Evo",
           peso : 9,
       },
    ];

    // Salvo la prima bici come riferimento da comparare
    let bici_leggera = bici_corsa[0];

    // Faccio un ciclo foreach per ciclare ogni oggetto
    bici_corsa.forEach((item) => {
        // Creo un if per verificare che se il peso della bici che sta leggendo il ciclo è minore rispetto al primo oggetto che usiamo come metodo di comparazione allora bicileggera diventa l'elemnto corrente che stiamo leggendo
        if (item.peso < bici_leggera.peso) {
            bici_leggera = item;
        }
    });

    console.log(bici_leggera);

    // Destruttuto le chiavi di bicileggera come varibili per utilizzarle nella scrittura a schermo
    const {nome, peso} = bici_leggera;

    // Appendo al container già presente in pagina un h1 con il nome della bici leggera che abbiamo destrutturato prima e il peso sempre della stessa
    $('.container').append
    (`
       <h1>
          La bici più leggera è ${nome} con il peso di ${peso} kg
       </h1>
   `);

});
