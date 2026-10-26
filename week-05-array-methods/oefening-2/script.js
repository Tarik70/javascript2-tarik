// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 


const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

const searchFind = document.getElementById("search-find");
const outputFind = document.getElementById("output-find");

searchFind.addEventListener("input", function () {
    const letter = searchFind.value.toLowerCase();

    if (letter === "") {
        outputFind.textContent = "";
        return;
    }

    const foundName = names.find(name =>
        name.toLowerCase().startsWith(letter)
    );

    if (foundName) {
        outputFind.textContent = "Gevonden: " + foundName;
    } else {
        outputFind.textContent = "Geen naam gevonden.";
    }

    searchFind.value = "";
});

const searchIncludes = document.getElementById("search-includes");
const outputIncludes = document.getElementById("output-includes");

searchIncludes.addEventListener("change", function () {
    const inputName = searchIncludes.value.toLowerCase();

    if (inputName === "") {
        outputIncludes.textContent = "";
        return;
    }

    const lowerCaseNames = names.map(name => name.toLowerCase());

    const result = lowerCaseNames.includes(inputName);

    outputIncludes.textContent = result;

    searchIncludes.value = "";
});
