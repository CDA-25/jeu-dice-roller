const newDiv = document.createElement("div");

newDiv.classList.add("dice");
newDiv.textContent = ""

const child = document.querySelector("#player")
child.appendChild(newDiv);

console.log(newDiv)

function getRandomNumbers(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomNumbers(6));


function rollDice() {
    const result = getRandomNumbers(6); // 0 à 5
    const offsetX = -(result * 100);
    newDiv.style.backgroundPosition = `${offsetX}px 0`;
    console.log(`Résultat: ${result + 1}`); // Affiche de 1 à 6
}

prompt("Combien de dés tu veux lancer ?")


// function creeUnDés() {
//     des = [1,2,3,4,5,6]
//     for (i = 0; i < des.length; i++)   
// }