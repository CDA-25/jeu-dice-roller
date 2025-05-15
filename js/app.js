window.addEventListener("load", function () {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dice");
    console.log(newDiv);
    const player = document.querySelector("#player");
    player.appendChild(newDiv);

    function nbrAleatoire(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    }

    const tirage = nbrAleatoire(1, 6);
    console.log(tirage);

    const dicePosition = (tirage - 1) * -100;
    newDiv.style.backgroundPosition = `${dicePosition}px`;

});