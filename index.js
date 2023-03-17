document.getElementById("search-btn").addEventListener("click", whichMonster);
document.getElementById("delete-btn").addEventListener("click", resetCard);

let search_bar = document.getElementById("search-bar");
let container = document.getElementById("container");
const monsterCard = document.getElementById("monsterCard");


function whichMonster() {
    if (search_bar.value.toLowerCase() === "creeper") {
        monsterBringUp(1)
    } else if (search_bar.value.toLowerCase() === "zombie") {
        monsterBringUp(2)
    } else if (search_bar.value.toLowerCase() === "skeleton") {
        monsterBringUp(3)
    } else if (search_bar.value.toLowerCase() === "spider") {
        monsterBringUp(4)
    } else if (search_bar.value.toLowerCase() === "blaze") {
        monsterBringUp(5)
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
    //monsterName
    monsterName = document.createElement("h2");
    monsterName.setAttribute("id", "monsterName");
    monsterName.innerText = data.name;
    monsterCard.appendChild(monsterName);

    //monsterImg
    monsterImg = document.createElement("img");
    monsterImg.setAttribute("id", "monsterImg");
    monsterImg.setAttribute("src", data.image);
    monsterImg.classList.add("monsterImg");
    monsterCard.appendChild(monsterImg);
}

function resetCard() {
    document.getElementById("monsterName").remove()
    document.getElementById("monsterImg").remove()
    search_bar.value = ""
}