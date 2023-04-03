
document.getElementById("search-btn").addEventListener("click", whichMonster);
document.addEventListener("DOMContentLoaded", fetchMonsters);

let search_bar = document.getElementById("search-bar");
let container = document.getElementById("container");
const monsterCard = document.getElementById("monsterCard");
const monsterInfo = document.getElementById("monsterInfo");
let globeData = [];
let monster = [];

function fetchMonsters() {
    fetch("http://localhost:3000/monsters")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        globeData = Object.entries(data);
        console.log(globeData)
        showMonster(globeData[0][1])
    })
}

function whichMonster() {
    globeData.forEach(element => {
        if (search_bar.value === element[1].name) {
            showMonster(element[1])
        }
    })
}

function getRandomMonster() {
    return Math.floor(Math.random() * 5)
}


function showMonster(data) {
    monster = data;
    console.log(monster);
    resetCard()
    //monsterName
    monsterName = document.createElement("h2");
    monsterName.classList.add("remove");
    monsterName.innerHtml = data.name;
    monsterInfo.appendChild(monsterName);
   
    //monsterImg
    monsterImg = document.createElement("img");
    monsterImg.classList.add("remove");
    monsterImg.setAttribute("src", data.image);
    monsterImg.classList.add("monsterImg");
    monsterInfo.appendChild(monsterImg);

    //monsterInfo:
    
    data["stats"].forEach(element => {
        monsterStat = document.createElement("h3");
        monsterStat.classList.add("remove");
        monsterStat.innerText = element;
        monsterInfo.appendChild(monsterStat);
    });
    monsterInformation = document.createElement("p");
    monsterInformation.classList.add("remove");
    monsterInformation.innerText = data.info;
    monsterInfo.appendChild(monsterInformation);

    
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            resetCard()
            showMonster(globeData[getRandomMonster()][1])
        }
    })
    
}

// Right BTN:
const rightBtn = document.getElementById("right-arrow");
rightBtn.addEventListener("click", function(event) {
    resetCard()
    showMonster(globeData[getRandomMonster()][1])
})

function resetCard() {
    document.querySelectorAll(".remove").forEach(element => element.remove())
    search_bar.value = ""
}
