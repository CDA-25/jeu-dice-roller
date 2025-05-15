window.addEventListener("load", function () {

    const demande = document.createElement("form");
    demande.classList.add("prompt");
    document.body.appendChild(demande);

    const textArea = document.createElement("label");
    textArea.textContent = "Avec combien de dés veux tu jouer ?";
    textArea.setAttribute("for", "nombreDes")

    const msg = document.createElement("input");
    msg.setAttribute("type", "number");
    msg.setAttribute("id", "nombreDes")

    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.value = "Jouer"

    demande.appendChild(textArea);
    demande.appendChild(msg);
    demande.appendChild(btn);

    const parent = demande.parentNode;
    parent.insertBefore(demande, parent.firstChild);



    function nbrAleatoire(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    };

    function viderElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };

    demande.addEventListener("submit", function (jeu) {
        jeu.preventDefault();
        console.log('btn cliqué');
        const nbrEntre = document.getElementById("nombreDes");
        const nbrChoisi = parseInt(nbrEntre.value);

        if (!isNaN(nbrChoisi) && nbrChoisi >= 1 && nbrChoisi <= 6) {
            const player = document.querySelector('#player');
            const dealer = document.querySelector('#dealer');
            viderElement(player);
            viderElement(dealer);
            for (let i = 0; i < nbrChoisi; i++) {
                creaDe('#player');
                creaDe('#dealer');
            }
        } else {
            alert('Vous devez entrer un chiffre entre 1 et 6');
        }
    });



    function creaDe(joueur) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("dice");
        const lanceur = document.querySelector(`${joueur}`);
        lanceur.appendChild(newDiv)
        const tirage = nbrAleatoire(1, 6);
        const dicePosition = (tirage - 1) * -100;
        newDiv.style.backgroundPosition = `${dicePosition}px`;
    }





    // un peu de style
    demande.style.backgroundColor = "rgb(37, 54, 151)"
    demande.style.color = "white"
    demande.style.display = "flex";
    demande.style.flexDirection = "column";
    demande.style.justifyContent = "center";
    demande.style.padding = "20px";
    demande.style.alignItems = "center";
    demande.style.gap = "20px"

    btn.style.backgroundColor = "yellow";
    btn.style.color = "blue"
    btn.style.borderRadius = "15px"
    btn.style.width = "200px"
    btn.style.height = "50px"
    btn.style.cursor = "pointer"
    btn.style.fontSize = "20px"

    textArea.style.fontSize = "30px";

    msg.style.width = "30%";
    msg.style.padding = "10px";
    msg.style.borderRadius = "5px";
    msg.style.border = "1px solid #ccc";
    msg.style.fontSize = "16px";



});



