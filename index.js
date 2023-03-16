document.addEventListener("DOMContentLoaded", fetchMonsters())

let container = document.getElementsByClassName("searchBar")

function fetchMonsters() {
    fetch("http://localhost:3000/monsters")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        monstersBringUp(data)
    })
}

function monstersBringUp(data) {
    // Search button:
    searchBtn = document.createElement("button");
    searchBtn.classList.add("search-btn");
    searchBtn.innerText = "Search";
    searchBtn.addEventListener("click", function(event) {
        searchMonsters(event)
    })
    


    // Monster
    data.forEach(element => {
        monsterName = document.createElement("h2");
        monsterName.innerHtml = element[0].name;
        container.appendChild(monsterName)
    });
}