// JE N'AI PAS ENCORE FINI, MAIS JE DOIS ALLER DORMIR

function validerNombreDes() {
    const input = document.getElementById("nbDes");
    const valeur = parseInt(input.value);
    return valeur;
}

const nombreDes = validerNombreDes()

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addDe() {
    const container = document.getElementById("player");
    const container2 = document.getElementById("dealer");
    
    const valeur1 = getRandom(1, 6);
    const valeur2 = getRandom(1, 6);
    
    const newDiv1 = document.createElement("div");
    const newDiv2 = document.createElement("div");
    
    newDiv1.classList.add("dice");
    newDiv2.classList.add("dice");

    newDiv1.style.backgroundPosition = `-${(valeur1 - 1) * 100}px 0`;
     // le signe - au debut pour décaler l'image vers la gauche et -1 car si on tombe sur 1 : ne pas bouger le background 
    
    newDiv2.style.backgroundPosition = `-${(valeur2 - 1) * 100}px 0`; 
    // exemple si getRandom = 5 : décaler le background image vers la gauche de 400px. Oui j'ai mis des commentaires, désolé

    container.appendChild(newDiv1);
    container2.appendChild(newDiv2);
}


function creationDes(combien, addDe) {
    const container = document.getElementById("player");
    const container2 = document.getElementById("dealer");
  
    container.replaceChildren();
    container2.replaceChildren();
  
    for (let i = 0; i < combien; i++) {
      addDe();
    }
  }
  
creationDes(nombreDes,addDe)




