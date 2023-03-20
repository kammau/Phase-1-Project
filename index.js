document.getElementById("search-btn").addEventListener("click", whichMonster);
document.addEventListener("DOMContentLoaded", monsterBringUp(1))

let search_bar = document.getElementById("search-bar");
let container = document.getElementById("container");
const monsterCard = document.getElementById("monsterCard");
const monsterInfo = document.getElementById("monsterInfo");

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
    resetCard()
    //monsterName
    monsterName = document.createElement("h2");
    monsterName.classList.add("remove");
    monsterName.innerText = data.name;
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

    // Left and right arrows:
    const leftBtn = document.getElementById("left-arrow");
    const rightBtn = document.getElementById("right-arrow");
    rightBtn.addEventListener("click", function(event) {
        resetCard()
        monsterID = data.id + 1;
        if (monsterID < 6) {
            monsterBringUp(monsterID);
        } else {
            monsterBringUp(1)
        }
    })
    document.addEventListener("keydown", function(event) {
        resetCard()
        if (event.key === "ArrowRight") {
            monsterID = data.id + 1;
            if (monsterID < 6) {
                monsterBringUp(monsterID);
            } else {
                monsterBringUp(1)
            }
        } else if (event.key === "ArrowLeft") {
            monsterID = data.id - 1;
            if (monsterID < 6 && monsterID > 0) {
                monsterBringUp(monsterID);
            } else {
                monsterBringUp(1)
            }
        }
    })
}

function resetCard() {
    document.querySelectorAll(".remove").forEach(element => element.remove())
    search_bar.value = ""
}