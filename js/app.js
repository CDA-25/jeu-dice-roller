window.addEventListener("load", createMultipleDice)

function diceRandom() {
    return Math.round(Math.random() * (6));
};

function createDice(id) {
    const div = document.createElement("div");
    const player = document.getElementById(id)
    div.classList.add("dice")
    player.appendChild(div)
    let randomNumber = diceRandom()
    let position = (randomNumber-1)*100
    div.style.backgroundPosition = "-" + position + "px 0"
}

function createOpponent() {
    const div = document.createElement("div")
    div.classList.add("board")
    div.setAttribute("id", "dealer")
}

function createMultipleDice() {
    let numberDices = parseInt(prompt("Combien de dés veux-tu lancer ?"))
    for (let i=0; i<numberDices; i++) {
        createDice("player")
        createDice("dealer")
    }
}




