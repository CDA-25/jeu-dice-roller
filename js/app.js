let gameCount = 0
const dicesInput = document.getElementById("chooseNumberDices")
const dicesValue = document.getElementById("numberDices")
dicesInput.addEventListener("click", function() {
    let nbDices = 0
    nbDices = dicesValue.value
    
    

    if (gameCount === 0) {
        startGame(nbDices)   
    }

    else {
        document.getElementById("player").innerHTML = ""
        document.getElementById("dealer").innerHTML = ""
        startGame(nbDices)
    }
})

function randomNumber() {
    return Math.round((Math.random() * 6) +1) * 100
}


function startGame(dices) {
    for (let i = 0; i < dices; i++) {
        let divPlayer = document.getElementById("player")
        const playerDice = document.createElement("div")
        playerDice.className = "dice"
        playerDice.style.backgroundPositionX = randomNumber() + "px"
        divPlayer.appendChild(playerDice)

        let divDealer = document.getElementById("dealer")
        const dealerDice = document.createElement("div")
        dealerDice.className = "board"
        dealerDice.style.backgroundPositionX = randomNumber() + "px"
        divDealer.appendChild(dealerDice)
    }
    gameCount++
}

//Ca manquait de commentaires, alors j'en ai mis un ! :D


