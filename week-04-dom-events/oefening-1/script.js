// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element

const button = document.querySelector('#add');
const input = document.querySelector('#input');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;

    const verwijder = document.createElement('button');
    verwijder.textContent = 'Verwijder';

    verwijder.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(verwijder);
    document.querySelector('#list').appendChild(li);
    
    input.value = '';
});