const player = document.getElementById("player")


// On ajoute une fonction pour tirer un nombre aléatoire entre 1 et 6

function createRandomDice() {
    const newDiv = document.createElement("div")
    newDiv.classList.add("dice")
    player.appendChild(newDiv)
    const randomNumber = Math.floor(Math.random() * 6) + 1
    newDiv.style.backgroundPosition = "-" + (randomNumber -1)* 100 + "px 0"
}

function game() {
    let number = parseInt(prompt("Combien de dé chef ?"))
    if (!isNaN(number) && number > 0) {
        for (let i = 0; i < number ; i++) {
            createRandomDice()
        }
    } else {
        alert("Veuillez entrer un nombre valide.")
        game()
    }
}
game()