let gameCount = 0
const dicesInput = document.getElementById("chooseNumberDices")
const dicesValue = document.getElementById("numberDices")
dicesInput.addEventListener("click", function() {
    let nbDices = 0
    nbDices = dicesValue.value
    
    if (gameCount > 0) {
        document.getElementById("player").textContent = ""
        document.getElementById("dealer").textContent = ""
        document.querySelector(".result").textContent = ""
    }
    startGame(nbDices)
})

function randomNumber() {
    return Math.trunc((Math.random() * 6) + 1)
}

function startGame(dices) {
    let playerScore = 0
    let dealerScore = 0
    for (let i = 0; i < dices; i++) {
        
        let playerRollDice = randomNumber()
        let divPlayer = document.getElementById("player")
        const playerDice = document.createElement("div")
        playerDice.className = "dice"
        playerDice.style.backgroundPositionX = 600 - (playerRollDice * 100) + 100 + "px"
        divPlayer.appendChild(playerDice)
        playerScore += playerRollDice        

        let dealerRollDice = randomNumber()
        let divDealer = document.getElementById("dealer")
        const dealerDice = document.createElement("div")
        dealerDice.className = "board"
        dealerDice.style.backgroundPositionX = 600 - (dealerRollDice * 100) + 100 + "px"
        divDealer.appendChild(dealerDice)
        dealerScore += dealerRollDice
    }
    
    let divResult = document.querySelector(".result")
    divResult.classList.remove("hidden")
    let resultContent = document.createElement("div")
    resultContent.className = "result"
    resultContent.textContent = checkWinner(playerScore, dealerScore)
    divResult.appendChild(resultContent)
    gameCount++
}

function checkWinner(playerScore, dealerScore) {
    let score = playerScore + " - " + dealerScore + " : "
    if (playerScore === dealerScore) {
        playSound("draw")
        return score + "Draw"
        }      
        if (playerScore > dealerScore) {
            playSound("win")
            return score + "You win !"
        } else {
            playSound("lose")
            return score + "You lose !"
        }
}

function playSound(result) {
    result = document.getElementById(result)
    result.currentTime = 0
    result.play()
}
      
//Ca manquait de commentaires, alors j'en ai mis un ! :D


