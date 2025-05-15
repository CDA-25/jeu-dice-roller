window.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
  
    // Création du formulaire de contrôle
    const controls = document.createElement('div');
    controls.style.padding = '1em';
    controls.style.background = 'pink';
    controls.style.textAlign = 'center';
  
    const label = document.createElement('label');
    label.setAttribute('for', 'diceCount');
    label.textContent = 'Choisissez le nombre de dés à lancer (1 à 6) : ';
    controls.appendChild(label);
  
    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'diceCount';
    input.min = '1';
    input.max = '6';
    input.value = '3';
    input.style.margin = '0 1em';
    controls.appendChild(input);
  
    const bouton = document.createElement('button');
    bouton.textContent = 'Jouer';
    bouton.style.padding = '0.5em 1em';
    bouton.style.fontSize = '1rem';
    bouton.style.backgroundColor = "orange"
    controls.appendChild(bouton);
  
    app.insertBefore(controls, app.firstChild);
  
    // Création de la div dealer
    if (!document.getElementById('dealer')) {
      const playerDiv = document.getElementById('player');
      const dealerDiv = document.createElement('div');
      dealerDiv.id = 'dealer';
      playerDiv.insertAdjacentElement('afterend', dealerDiv);
    }
  
    // Fonction pour tirer un dé
    function tirerDe() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    // Fonction pour afficher les dés + message à droite
    function afficherDes(containerId, valeurs, message = "") {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
  
      const desContainer = document.createElement('div');
      desContainer.style.display = 'flex';
      desContainer.style.alignItems = 'center';
  
      // Zone des dés
      const desZone = document.createElement('div');
      desZone.style.display = 'flex';
  
      valeurs.forEach(valeur => {
        const de = document.createElement('div');
        de.classList.add('dice');
        const decalageX = (valeur - 1) * -100;
        de.style.backgroundPosition = `${decalageX}px 0`;
        desZone.appendChild(de);
      });
  
      // Zone du message à droite
      const resultatZone = document.createElement('div');
      resultatZone.classList.add('resultat');
      resultatZone.textContent = message;
      resultatZone.style.marginLeft = '2em';
      resultatZone.style.fontSize = '1.2rem';
      resultatZone.style.fontWeight = 'bold';
      resultatZone.style.color = "black";
  
      desContainer.appendChild(desZone);
      desContainer.appendChild(resultatZone);
  
      container.appendChild(desContainer);
    }
  
    // Fonction principale de lancer des dés
    function lancerDes(nbDes) {
      const lancersPlayer = [];
      const lancersDealer = [];
  
      for (let i = 0; i < nbDes; i++) {
        lancersPlayer.push(tirerDe());
        lancersDealer.push(tirerDe());
      }
  
      const totalPlayer = lancersPlayer.reduce((a, b) => a + b, 0);
      const totalDealer = lancersDealer.reduce((a, b) => a + b, 0);
  
      let messagePlayer = `Score : ${totalPlayer} — `;
      let messageDealer = `Score : ${totalDealer} — `;

        if (totalPlayer > totalDealer) {
        messagePlayer += "Le joueur gagne !";
        messageDealer += "Le dealer perd.";
        } else if (totalDealer > totalPlayer) {
        messagePlayer += "Le joueur perd.";
        messageDealer += "Le dealer gagne !";
        } else {
        messagePlayer += "Égalité !";
        messageDealer += "Égalité !";
        }
  
      afficherDes('player', lancersPlayer, messagePlayer);
      afficherDes('dealer', lancersDealer, messageDealer);
    }
  
    // Événement du bouton Jouer
    bouton.addEventListener('click', () => {
      let nbDes = parseInt(input.value, 10);
  
      if (isNaN(nbDes) || nbDes < 1 || nbDes > 6) {
        alert("Entre un nombre entre 1 et 6.");
        return;
      }
  
      lancerDes(nbDes);
    });
  });
