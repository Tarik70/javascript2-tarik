let allArticles = [];

const showArticles = (articles) => {

  const articlesSection = document.getElementById('articles');

  const articlesHTML = articles.map(article => {
    const { title, category, date, summary } = article;

    return `
      <article>
        <span>${category} - ${date}</span>
        <h2>${title}</h2>
        <p>${summary}</p>
      </article>
    `;
  });

  articlesSection.innerHTML = articlesHTML.join('');
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {

    allArticles = articles;

    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));



document.getElementById('filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.getElementById('filter-stad').addEventListener('click', () => {
  const filteredArticles = allArticles.filter(article =>
    article.category === 'Stad'
  );

  showArticles(filteredArticles);
});

document.getElementById('filter-technologie').addEventListener('click', () => {
  const filteredArticles = allArticles.filter(article =>
    article.category === 'Technologie'
  );

  showArticles(filteredArticles);
});

document.getElementById('filter-media').addEventListener('click', () => {
  const filteredArticles = allArticles.filter(article =>
    article.category === 'Media'
  );

  showArticles(filteredArticles);
});