const dicesInput = document.getElementById("chooseNumberDices")
const dicesValue = document.getElementById("numberDices")
dicesInput.addEventListener("click", function() {
    let nbDices = 0
    nbDices = dicesValue.value

    for (let i = 0; i < nbDices; i++) {
    const divPlayer = document.getElementById("player")
    const playerDice = document.createElement("div")
    playerDice.className = "dice"
    playerDice.style.backgroundPositionX = randomNumber() + "px"
    divPlayer.appendChild(playerDice)

    const divDealer = document.getElementById("dealer")
    const dealerDice = document.createElement("div")
    dealerDice.className = "board"
    dealerDice.style.backgroundPositionX = randomNumber() + "px"
    divDealer.appendChild(dealerDice)
}
})

function randomNumber() {
    return Math.round((Math.random() * 6) +1) * 100
}


