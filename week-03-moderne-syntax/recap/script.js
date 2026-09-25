const button1 = document.querySelector('#btn1');
const p1 = document.querySelector('#p1');
const title = document.querySelector('#title1');

let naam = 'Tarik';
let opleiding = 'Software development';
let aantalKlikken = 0;
let puntenAantal = 0;

title.textContent = `Hoi, ik ben ${naam} en ik doe ${opleiding}`;
title.classList.toggle('active');

button1.textContent = 'Mooie knop';

button1.addEventListener('click', () => {
    aantalKlikken++;
    puntenAantal += 10;

    const p1tekst = document.createElement('p1');
    p1tekst.textContent = `Klik ${aantalKlikken}: je hebt nu ${puntenAantal} punten`;

    p1.innerHTML = '';
    p1.appendChild(p1tekst);

    title.classList.toggle('active');
});