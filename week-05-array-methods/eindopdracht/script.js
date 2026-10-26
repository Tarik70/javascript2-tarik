
const products = [
  { name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: true },
  { name: 'Draadloze muis', category: 'Electronics', price: 29, stock: true },
  { name: 'USB-C hub', category: 'Electronics', price: 49, stock: false },
  { name: 'Bureaulamp', category: 'Kantoor', price: 35, stock: true },
  { name: 'Notitieboek', category: 'Kantoor', price: 8, stock: true },
  { name: 'Pennenset', category: 'Kantoor', price: 12, stock: false },
  { name: 'Koptelefoon', category: 'Audio', price: 89, stock: true },
  { name: 'Bluetooth speaker', category: 'Audio', price: 59, stock: true },
  { name: 'Webcam HD', category: 'Electronics', price: 79, stock: false },
  { name: 'Muismat XL', category: 'Kantoor', price: 19, stock: true },
  { name: 'Monitor 27"', category: 'Electronics', price: 349, stock: true },
  { name: 'Desk organizer', category: 'Kantoor', price: 24, stock: true },
];

let searchTerm = '';
let sorting = '';

const productsContainer = document.getElementById('products');
const counter = document.getElementById('counter');
const searchBar = document.getElementById('search-bar');

const showProducts = (products) => {
  // Maak de bestaande productweergave leeg
  productsContainer.innerHTML = '';

  // Toon het aantal producten
  counter.textContent = `${products.length} producten gevonden`;

  // Maak voor elk product een article
  products.forEach(product => {
    const article = document.createElement('article');

    const title = document.createElement('h3');
    title.textContent = product.name;

    const category = document.createElement('p');
    category.textContent = `Categorie: ${product.category}`;
    category.style.fontSize = '0.9rem';
    category.style.color = '#7a6a58';
    category.style.fontWeight = 'normal';
    category.style.marginBottom = '0.5rem';

    const price = document.createElement('p');
    price.textContent = `€${product.price.toFixed(2)}`;

    const stock = document.createElement('p');
    stock.textContent = product.stock
      ? 'Op voorraad'
      : 'Niet op voorraad';
    stock.style.fontSize = '0.9rem';
    stock.style.fontWeight = 'normal';
    stock.style.marginTop = '0.5rem';

    article.appendChild(title);
    article.appendChild(category);
    article.appendChild(price);
    article.appendChild(stock);

    productsContainer.appendChild(article);
  });
};

const filterProducts = () => {
  // Filter op naam, zonder onderscheid tussen hoofdletters
  let filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorteer op prijs
  if (sorting === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sorting === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  showProducts(filtered);
};

// Zoekbalk
searchBar.addEventListener('input', () => {
  searchTerm = searchBar.value;
  filterProducts();
});

// Knop: prijs laag naar hoog
document.getElementById('sort-low').addEventListener('click', () => {
  sorting = 'low';
  filterProducts();
});

// Knop: prijs hoog naar laag
document.getElementById('sort-high').addEventListener('click', () => {
  sorting = 'high';
  filterProducts();
});

// Toon alle producten bij het openen
filterProducts();
