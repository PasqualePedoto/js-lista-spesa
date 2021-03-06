// # Realizziamo una stampa della lista della spesa

// $ Creiamo un vettore con gli elementi della lista della spesa

const listItem = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio'];

// $ Bersagliamo un elemento nel DOM così da creare la lista della spesa
const paragraph = document.getElementById('paragraph');

// * Realizziamo un ciclo while

//Dichiariamo e definiamo una variabile contatore per il while
let i = 0;

//Creiamo ed agganciamo una lista ordinata servendoci del createElement
const orderedList = document.createElement('ul');
paragraph.appendChild(orderedList);

while (i < listItem.length) {
    //Creiamo una lista ordinata servendoci del createElement
    const element = document.createElement('li');

    //Aggiungiamo l'elemento della spesa
    const randomNumber = Math.floor(Math.random() * 2);
    sentence = listItem[i];

    switch (randomNumber) {
        case 1:
            sentence += '  <i class="text-primary fa-solid fa-check"></i>';
            break;
        case 0:
            sentence += '  <i class="text-danger fa-solid fa-xmark"></i>';
            break;
    }
    element.innerHTML = sentence;

    //Agganciamo il li all'ul
    orderedList.appendChild(element);

    //Incrementiamo la variabile contatore così da realizzare la logica del for
    i++;
}




