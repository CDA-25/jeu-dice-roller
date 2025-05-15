
let combien = parseInt(prompt("Combien de dés voulez vous lancer ? Maximum 6"))

function addDe() {
    const container = document.getElementById("player");
    const container2 = document.getElementById("dealer");
    const newDiv1 = document.createElement("div");
    const newDiv2 = document.createElement("div");
    newDiv1.classList.add("dice");
    newDiv2.classList.add("dice");
    container.appendChild(newDiv1);
    container2.appendChild(newDiv2);
}


function creationDes(combien,addDe) {
    for (let i = 0; i < combien; i++) {
        addDe() } 
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function desAleatoires(getRandom) {
    let nombre = 0;
    resultat = getRandom();
    nombre === (resultat * 100);

}


element.addEventListener("click", () => {
element.style.backgroundPosition = "-100px 0"; 
});
  

