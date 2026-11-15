fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data);
    const characters = document.querySelector('#characters');
    data.results.forEach(character => {
      const article = document.createElement('article');
      const title = document.createElement('h2');
      title.textContent = character.name;
      const image = document.createElement('img');
      image.src = character.image;
      image.alt = character.name;
      article.appendChild(title);
      article.appendChild(image);
      characters.appendChild(article);
    });
    })
    .catch(error => console.error('Fout:', error));