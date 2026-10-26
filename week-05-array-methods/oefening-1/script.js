// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted

const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const filteredScores = scores.filter(score => score > 50);

const filteredList = document.getElementById("result-filtered");

filteredScores.forEach(score => {
    const li = document.createElement("li");
    li.textContent = score;
    filteredList.appendChild(li);
});

const doubledScores = scores.map(score => score * 2);

const mapList = document.getElementById("result-map");

doubledScores.forEach(score => {
    const li = document.createElement("li");
    li.textContent = score;
    mapList.appendChild(li);
});

const sortedScores = [...scores].sort((a, b) => a - b);

const sortedList = document.getElementById("result-sorted");

sortedScores.forEach(score => {
    const li = document.createElement("li");
    li.textContent = score;
    sortedList.appendChild(li);
});
