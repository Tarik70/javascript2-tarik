fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {

    const filmsSection = document.getElementById('films');

    movies.forEach(movie => {
      const { title, director, year, genre } = movie;

      const article = document.createElement('article');

      article.innerHTML = `
        <h2>${title}</h2>
        <p>Regisseur: ${director}</p>
        <p>Jaar: ${year}</p>
        <p>Genre: ${genre}</p>
        <hr>
      `;

      filmsSection.appendChild(article);
    });
  })
  .catch(error => console.error('Fout:', error));