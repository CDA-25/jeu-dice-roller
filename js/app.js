//Etape 1 je fait mon dés
const newDiv = document.createElement("div");   //commande pour crée ma div
newDiv.classList.add("dice");                   //commande pour ensuite ajouter une classe ma div
const player = document.querySelector("#player"); //je selectionne l'element html dont l'id est player 
player.appendChild(newDiv);                    //dans ma div player il va ajouter ma nouvelle div
//etape 2 tirer un nombre aléatoire
function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
};
const dice = document.getElementById("dice");
dice.style.dice = 
