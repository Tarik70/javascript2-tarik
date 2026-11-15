const user = {
    name: 'Anna',
    age: 28,
    city: 'Amsterdam'
};

const zonderJson = document.querySelector('#zonder-json');
const metJson = document.querySelector('#met-json');

localStorage.setItem('userZonderJSON', user);

const userZonderJSON = localStorage.getItem('userZonderJSON');

console.log(userZonderJSON);

zonderJson.innerHTML += `
    <p>Naam: ${userZonderJSON}</p>
    <p>Resultaat: ${userZonderJSON}</p>
`;

localStorage.setItem('userMetJSON', JSON.stringify(user));

const userMetJSON = JSON.parse(
    localStorage.getItem('userMetJSON')
);

console.log(userMetJSON);

metJson.innerHTML += `
    <p>Naam: ${userMetJSON.name}</p>
    <p>Leeftijd: ${userMetJSON.age}</p>
    <p>Stad: ${userMetJSON.city}</p>
`;