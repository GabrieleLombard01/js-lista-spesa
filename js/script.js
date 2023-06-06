//JS RESET
console.log('JS OK')

/*||||||||||||||||||||
||||| FOR-METHOD ||||| ->
||||||||||||||||||||||
*/

//PRENDO L'ELEMENTO DEL DOM
const paragraphElement = document.getElementById('paragraph');

//CREO una variabile sfruttando l'array con dentro gli oggetti della lista della spesa
const listElements = ['mela', 'pera', 'pasta', 'pollo', 'cereali', 'mela', 'pera', 'pasta', 'pollo', 'cereali'];

//console.log(listElements);

let list = ' ';

//APRO UN CICLO
for (let i = 0; i < listElements.length; i++) {
	//ISTRUZIONI DA ESEGUIRE
    list += `<li>${listElements[i]}</li>`;

    paragraphElement.innerHTML = list;
}

/*||||||||||||||||||||||
||||| WHILE-METHOD ||||| ->
||||||||||||||||||||||||
*/

//PRENDO L'ELEMENTO DEL DOM
const paragraphElement2 = document.getElementById('second-paragraph');

//CREO una variabile sfruttando l'array con dentro gli oggetti della lista della spesa
const listElements2 = ['mela', 'pera', 'pasta', 'pollo', 'cereali', 'mela', 'pera', 'pasta', 'pollo', 'cereali'];

let list2 = ' ';
let i = 0;
//APRO UN CICLO
while (i < listElements2.length) {
    list2 += `<li>${listElements2[i]}</li>`;
    i++;
    paragraphElement2.innerHTML = list2;
};