const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

const origineel = document.querySelector('#origineel');
const kopie = document.querySelector('#kopie');

people.map(({ name, city }) => {
  const p = document.createElement('p');
  p.textContent = `${name} — ${city}`;
  origineel.appendChild(p);
});

const aangepast = people.map(person => ({ ...person, city: 'Den Haag' }));

aangepast.map(({ name, city }) => {
  const p = document.createElement('p');
  p.textContent = `${name} — ${city}`;
  kopie.appendChild(p);
});