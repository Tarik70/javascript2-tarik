const input = document.querySelector('#input');
const saveButton = document.querySelector('#save');
const retrieveButton = document.querySelector('#retrieve');
const result = document.querySelector('#result');

saveButton.addEventListener('click', () => {

    const text = input.value;

    if (text.trim() === '') {
        result.textContent = 'Vul eerst iets in!';
        return;
    }

    localStorage.setItem('opgeslagenTekst', text);

    result.textContent = 'Tekst succesvol opgeslagen!';
});

retrieveButton.addEventListener('click', () => {

    const savedText = localStorage.getItem('opgeslagenTekst');

    if (savedText === null) {
        result.textContent = 'Er is nog niets opgeslagen!';
    } else {
        result.textContent = savedText;
    }
});