//JS RESET
console.log('JS OK')

//PRENDO L'ELEMENTO DEL DOM
const paragraphElement = document.getElementById('paragraph');

//CREO una variabile sfruttando l'array con dentro gli oggetti della lista della spesa
const listElements = ['mela', 'pera', 'pasta', 'pollo', 'cereali', 'mela', 'pera', 'pasta', 'pollo', 'cereali'];

//console.log(listElements);

let list = ' ';

//APRO UN CICLO
for (let i = 0; i < listElements.lenght; i++) {
	//ISTRUZIONI DA ESEGUIRE
    list += (listElements[i]);

    paragraphElement.innerHTML = list;
}