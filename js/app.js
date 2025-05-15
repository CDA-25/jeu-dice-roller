window.addEventListener("load", function () {



    function nbrAleatoire(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    }

    function creaDe() {
        const newDiv = document.createElement("div");
        newDiv.classList.add("dice");
        console.log(newDiv);
        const player = document.querySelector("#player");
        player.appendChild(newDiv)
        const tirage = nbrAleatoire(1, 6);
        console.log(tirage);
        const dicePosition = (tirage - 1) * -100;
        newDiv.style.backgroundPosition = `${dicePosition}px`;
    }



    function choisirNbr() {
        let nbrChoisi = parseInt(prompt('Avec combien de dé veux-tu jouer ?'));
        if (!isNaN(nbrChoisi) && nbrChoisi >= 1 && nbrChoisi <= 6) {
            for (let i = 0; i < nbrChoisi; i++) {
                creaDe()
            }
        } else {
            alert('Vous devez entrer un chiffre entre 1 et 6');
            choisirNbr()
        }

    }

    choisirNbr()
});