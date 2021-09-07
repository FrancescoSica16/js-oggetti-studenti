// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. v
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. v
// Creare un array di oggetti di studenti. v
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


const studente = {
    "nome" : "Francesco",

    "cognome" : "Sica",

    "eta" : "28",
}

for (const key in studente) {
   
      console.log(studente[key])  
    
}


// array di oggetti studente
const studenti = [
    {
        nome : "Francesco",
        cognome : "Sica",
        eta : "28",
    },
    {
        nome : "Micheal",
        cognome : "Scott",
        eta : "38",
    },
    {
        nome : "Jim",
        cognome : "Harper",
        eta : "35",
    },
]; 

//ciclo per stampare nome e cognome dell'oggetto contenuto in array studenti
for (let i = 0; i < studenti.length; i++) {

    let Studente = studenti[i];
    console.log(Studente.nome);
    console.log(Studente.cognome);

    // let nomeStudente = studenti[i].nome;
    // let cognomeStudente = studenti["cognome"];   
    //                                            // perche devo metterlo per forza in una variabile ?
    // console.log(nomeStudente)  ;              // ""nome" + " " + "cognome""  ?
    // console.log(cognomeStudente)  ;  
}







// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }







