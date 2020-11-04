// Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

$(document).ready(function() {

    // Creo un array di nomi
    const nomi = ["Anna", "Paolo", "Silvia", "Carlo", "Barbara", "Giuliano", "Sara"];

    // Chiedo all'utente il primo e l'ultimo numero
    const primo = parseInt(prompt("Inserisci un numero tra 0 e 6"));
    const ultimo = parseInt(prompt("Inserisci un numero tra 0 e 6"));

    // Creo un array nuovo per salvare i nomi scelti
    const nuovo_array = [];

    // Creo un ciclo foreach per ciclare tutti gli elementi dell'array nomi
    nomi.forEach((item, index) => {
        // Se il numero scelto dall'utente è compreso tra l'indice dell'array nomi fa push
        if(primo <= index && ultimo >= index){
            nuovo_array.push(item);
        }
    });

    // Stampo con il ciclo foreach
    console.log(nuovo_array);


    // Creo un ciclo filter per ciclare tutti gli elementi dell'array nomi e salvare solo quelli che chiede l'utente
    // const nuovo_array_filtro = nomi.filter((item,index) => primo <= index && ultimo >= index);

    // Stampo con il ciclo filter
    // console.log(nuovo_array_filtro);


});
