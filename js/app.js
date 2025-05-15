window.addEventListener("load", function() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", createMultipleDice);
})

function diceRandom() {
    return Math.round(Math.random() * (6));
};

function createDice(id) {
    const div = document.createElement("div");
    const player = document.getElementById(id)
    div.classList.add("dice")
    player.appendChild(div)
    let randomNumber = diceRandom()
    let position = (randomNumber)*100
    console.log(position)
    div.style.backgroundPosition = "-" + position + "px 0"
}

function createOpponent() {
    const div = document.createElement("div")
    div.classList.add("board")
    div.setAttribute("id", "dealer")
}

function reset() {
    document.getElementById("player").textContent = ""
    document.getElementById("dealer").textContent = ""
}

function createMultipleDice() {
    let input = document.getElementById("numberDices");
    let count = parseInt(input.value)
    reset()
    for (let i=0; i<count; i++) {
        createDice("player")
        createDice("dealer")
    }
}




