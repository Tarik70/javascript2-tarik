
const users = [
  { name: 'Jan de Vries', email: 'jan@bedrijf.nl', role: 'admin', active: true },
  { name: 'Lisa Bakker', email: 'lisa@bedrijf.nl', role: 'user', active: true },
  { name: 'Tom Visser', email: 'tom@bedrijf.nl', role: 'user', active: false },
  { name: 'Sara Meijer', email: 'sara@bedrijf.nl', role: 'admin', active: true },
];

let filter = 'all';

const showUsers = (users) => {
  const usersSection = document.getElementById('users');

  usersSection.innerHTML = '';


  users.forEach(user => {

    const { name, email, role, active } = user;

    const article = document.createElement('article');

    article.innerHTML = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Rol: ${role}</p>
      <p>Status: ${active ? 'Actief' : 'Inactief'}</p>
    `;

    usersSection.appendChild(article);
  });
};

const filterUsers = () => {
  let filteredUsers;

  if (filter === 'admin') {
    filteredUsers = users.filter(user => user.role === 'admin');
  } else {
    filteredUsers = users;
  }

  showUsers(filteredUsers);
};

document.getElementById('filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.getElementById('filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

document.getElementById('user-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const role = document.getElementById('role').value;

  const defaultUser = {
    active: true
  };

  const newUser = {
    ...defaultUser,
    name,
    email,
    role
  };

  users.push(newUser);

  document.getElementById('user-form').reset();

  filterUsers();
});

filterUsers();

