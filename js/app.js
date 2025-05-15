window.addEventListener("load", createDice)

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
    div.style.backgroundPosition = `-${position}px 0`
}
