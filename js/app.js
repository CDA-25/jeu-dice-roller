/*
Dans ma <div id="player"> je veux un titre h1 "Choissez le nombre de dés à lancer
Dans ma <div id="player"> je veux un <P> input de type number OU LE CHOIX EST COMPRIS ENTRE 1 ET 6
Dans ma <div id="player"> je veux un bouton "Jouer"
Dans ma <div id="player"> je veux un <div CLASS="DICE"> qui contiendra mes dés
lE CSS CE TROUVE DANS LE DOSSIER CSS
*/

// Fonction pour tirer un nombre aléatoire entre 1 et 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Modifier l'arrière-plan de l'image en fonction du nombre aléatoire
function updateDiceBackground(diceElement) {
  const randomNumber = getRandomNumber();
  const positionX = (randomNumber - 1) * -100; // Chaque face fait 100px de large
  diceElement.style.backgroundPosition = `${positionX}px 0`;
}

// Créer un bouton pour lancer le dé
const rollButton = document.createElement('button');
rollButton.textContent = 'Jouer';

// Créer un input pour saisir le nombre de dés
const inputLabel = document.createElement('label');
inputLabel.textContent = 'Choissez le nombre de dés à lancer ';
const inputNumber = document.createElement('input');
inputNumber.type = 'number';
inputNumber.min = '1';
inputNumber.max = '6';
inputNumber.value = '1';

// Créer un conteneur fixe pour le label, l'input et le bouton 
// car je n'arrive pas a mettre cette merde comme sur le rendu final
const controlsContainer = document.createElement('div');
controlsContainer.style.position = 'fixed';
controlsContainer.style.top = '0';
controlsContainer.style.left = '0';
controlsContainer.style.width = '100%';
controlsContainer.style.padding = '10px';
controlsContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
controlsContainer.style.display = 'flex';
controlsContainer.style.justifyContent = 'center';
controlsContainer.style.gap = '10px';

// Ajouter le label, l'input et le bouton dans le conteneur fixe
controlsContainer.append(inputLabel, inputNumber, rollButton);

// Ajouter le conteneur fixe comme enfant de la div avec l'id 'app'
const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.appendChild(controlsContainer);
}

// Fonction pour créer un dé et l'ajouter à un conteneur
function createDice(container) {
  const dice = document.createElement('div');
  // Ajouter la classe 'dice' pour appliquer les styles
  dice.classList.add('dice');
  // Ajouter le dé au conteneur
  container.append(dice);
  // Modifier l'arrière-plan du dé
  updateDiceBackground(dice);
}

// Fonction pour créer une div dans le DOM avec un id donné
function createDiv(id) {
  const div = document.createElement('div');
  // Attribuer l'id à la div
  div.id = id;
  // Utiliser flexbox pour aligner les éléments
  div.style.display = 'flex';
  // Ajouter un espace entre les éléments
  div.style.gap = '10px';
  // Ajouter un espace au-dessus de la div
  div.style.marginTop = '20px';
  // Ajouter la div au DOM
  document.body.append(div);
  // Retourner la div créée
  return div;
}

// Fonction pour calculer le score total des dés dans un conteneur
function calculateScore(container) {
  const diceElements = container.querySelectorAll('.dice');
  let score = 0;
  diceElements.forEach(dice => {
    const backgroundPosition = dice.style.backgroundPosition;
    const positionX = parseInt(backgroundPosition.split(' ')[0], 10);
    const diceValue = Math.abs(positionX / -100) + 1; // Convertir la position en valeur de dé
    score += diceValue;
  });
  return score;
}

// Ajouter un événement au bouton pour lancer les dés et calculer les scores
rollButton.addEventListener('click', () => {
  const playerContainer = document.querySelector('#player'); // Conteneur du joueur
  const dealerContainer = document.querySelector('#dealer'); // Conteneur du dealer
  if (playerContainer && dealerContainer) {
    // Réinitialiser les dés du joueur
    playerContainer.innerHTML = '';
    // Réinitialiser les dés du dealer
    dealerContainer.innerHTML = '';
    // Récupérer le nombre de dés à lancer
    const numberOfDice = parseInt(inputNumber.value, 10) || 1;
    for (let i = 0; i < numberOfDice; i++) {
      // Créer et ajouter un dé au conteneur du joueur
      createDice(playerContainer);
      // Créer et ajouter un dé au conteneur du dealer
      createDice(dealerContainer);
    }

    // Calculer les scores
    const playerScore = calculateScore(playerContainer);
    const dealerScore = calculateScore(dealerContainer);

    // Afficher le résultat dans la div du joueur
    const playerResult = document.createElement('div');
    playerResult.style.textAlign = 'center';
    playerResult.style.marginTop = '10px';
    //playerResult.textContent = `Score: ${playerScore}`;
    if (playerScore > dealerScore) {
      playerResult.textContent += 'You win!';
    } else if (playerScore < dealerScore) {
      playerResult.textContent += 'You lose!';
    } else {
      playerResult.textContent += 'Equality';
    }
    playerContainer.appendChild(playerResult);

    // Afficher le résultat dans la div du dealer
    const dealerResult = document.createElement('div');
    dealerResult.style.textAlign = 'center';
    dealerResult.style.marginTop = '10px';
    //dealerResult.textContent = `Score: ${dealerScore}`;
    if (dealerScore > playerScore) {
      dealerResult.textContent += 'You win!';
    } else if (dealerScore < playerScore) {
      dealerResult.textContent += 'You lose!';
    } else {
      dealerResult.textContent += 'Equality';
    }
    dealerContainer.appendChild(dealerResult);
  }
});
