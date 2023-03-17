document.getElementById("search-btn").addEventListener("click", whichMonster);
let search_bar = document.getElementById("search-bar");
let container = document.getElementById("container");
const monsterCard = document.getElementById("monsterCard");

function whichMonster() {
    if (search_bar.value.toLowerCase() === "creeper") {
        monsterBringUp(1)
    }
    if (search_bar.value.toLowerCase() === "zombie") {
        monsterBringUp(2)
    }
}



function monsterBringUp(idNum) {
    fetch(`http://localhost:3000/monsters/${idNum}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        showMonster(data)
    })
}

function showMonster(data) {
    monsterName = document.createElement("h2");
    monsterName.innerText = data.name;
    monsterCard.appendChild(monsterName);

    monsterImg = document.createElement("img");
    monsterImg.setAttribute("src", data.image);
    monsterImg.classList.add("monsterImg");
    monsterCard.appendChild(monsterImg);
}
