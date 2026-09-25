// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.getElementById('profile-form');
const profilesList = document.getElementById('profiles-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const profile = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    department: document.getElementById('department').value
  };

  profilesList.innerHTML += `
    <article>
    <h3>${profile.name}</h3>
    <p>Functie: ${profile.role}</p>
    <p>Afdeling: ${profile.department}</p>
    <button class="delete-btn">Verwijder</button>
    </article>`
    ;

  form.reset();
});

profilesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
     event.target.closest('article').remove();
  }
});