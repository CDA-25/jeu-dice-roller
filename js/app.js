window.addEventListener("load", createMultipleDice)

let diceDiv


function diceRandom() {
    return Math.round(Math.random() * (6 - 1) + 1);
};


function createDice() {
    const div = document.createElement("div");
    const player = document.getElementById("player")
    div.classList.add("dice")
    player.appendChild(div)
    let randomNumber = diceRandom()
    let position = (randomNumber-1)*100
    div.style.backgroundPosition = "-" + position + "px 0"
}

function createMultipleDice() {
    let numberDices = parseInt(prompt("Combien de dés veux-tu lancer ?"))
    for (let i=0; i<numberDices; i++)
        createDice()
}



