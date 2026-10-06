// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("tasks");
const counter = document.getElementById("counter");

function updateCounter() {
  const totaal = list.children.length;
  const open = list.querySelectorAll("li:not(.afgevinkt)").length;
  counter.textContent = open + " open van " + totaal + " taken";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const tekst = input.value.trim();
  if (tekst === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = tekst;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Verwijder";

  checkbox.addEventListener("change", function () {
    li.classList.toggle("afgevinkt", checkbox.checked);
    updateCounter();
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
  input.focus();
  updateCounter();
});

updateCounter();