fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Selecteer de ul uit de HTML
    const booksList = document.getElementById('books-list');

    // Loop door alle boeken
    books.forEach(book => {
      // Haal de gegevens uit het object
      const { title, author, year } = book;

      // Maak een nieuw li-element
      const li = document.createElement('li');

      // Vul het li-element met de boekgegevens
      li.textContent = `${title} - ${author} (${year})`;

      // Voeg het boek toe aan de ul
      booksList.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
