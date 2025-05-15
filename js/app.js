const newDiv = document.createElement("div");
newDiv.classList.add("dice");
const playerDiv = document.querySelector("#player");
playerDiv.appendChild(newDiv);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const diceDiv = document.querySelector(".dice");
const roll = getRandomInt(1, 6);

const positionX = (roll - 1) * -100;
diceDiv.style.backgroundPosition = positionX + "px 0";

let multiplyDice = prompt("Combien de dés voulez-vous lancer ?");
for (let i = 0; i < multiplyDice; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("dice");
  const playerDiv = document.querySelector("#player");
  playerDiv.appendChild(newDiv);
}
