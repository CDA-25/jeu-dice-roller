// Tire un nombre aléatoire entre 1 et 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Modifie l'arrière-plan d'un dé en fonction de sa valeur
function updateDiceBackground(diceElement, diceValue) {
  const positionX = (diceValue - 1) * -100; // Chaque face du dé fait 100px de large
  diceElement.style.backgroundPosition = `${positionX}px 0`;
}

// Crée un élément HTML représentant un dé et l'ajoute à un conteneur
function createDice(container, diceValue) {
  const dice = document.createElement('div');
  dice.classList.add('dice'); // Applique la classe CSS 'dice'
  updateDiceBackground(dice, diceValue); // Définit l'arrière-plan en fonction de la valeur du dé
  container.append(dice); // Ajoute le dé au conteneur
}

// Calcule le score total des dés dans un conteneur
function calculateScore(container) {
  const diceElements = container.querySelectorAll('.dice'); // Sélectionne tous les dés
  let score = 0;
  diceElements.forEach(dice => {
    const backgroundPosition = dice.style.backgroundPosition; // Récupère la position d'arrière-plan
    const positionX = parseInt(backgroundPosition.split(' ')[0], 10); // Extrait la position X
    const diceValue = Math.abs(positionX / -100) + 1; // Convertit la position en valeur de dé
    score += diceValue; // Ajoute la valeur au score total
  });
  return score;
}

// Affiche le résultat du jeu (victoire, défaite ou égalité)
function displayResult(container, score, opponentScore) {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('result'); // Applique une classe CSS pour le style

  if (score > opponentScore) {
    resultDiv.textContent = 'You win !'; // Message de victoire
    resultDiv.classList.add('win'); // Classe pour les victoires
  } else if (score < opponentScore) {
    resultDiv.textContent = 'You lose !'; // Message de défaite
    resultDiv.classList.add('lose'); // Classe pour les défaites
  } else {
    resultDiv.textContent = 'Equality !'; // Message d'égalité
    resultDiv.classList.add('draw'); // Classe pour les égalités
  }

  container.appendChild(resultDiv); // Ajoute le message au conteneur
}

// Gère le clic sur le bouton "Jouer" pour lancer les dés
function handleRollDice(playerContainer, dealerContainer, inputNumber) {
  // Réinitialise les dés et les messages
  playerContainer.innerHTML = '';
  dealerContainer.innerHTML = '';

  // Récupère le nombre de dés à lancer
  const numberOfDice = parseInt(inputNumber.value, 10) || 1;

  // Génère les valeurs des dés et calcule les scores
  let playerScore = 0;
  let dealerScore = 0;

  for (let i = 0; i < numberOfDice; i++) {
    const playerDiceValue = getRandomNumber(); 
    const dealerDiceValue = getRandomNumber(); 

    playerScore += playerDiceValue; 
    dealerScore += dealerDiceValue; 

    createDice(playerContainer, playerDiceValue); 
    createDice(dealerContainer, dealerDiceValue); 
  }

  // Affiche les résultats
  displayResult(playerContainer, playerScore, dealerScore);
  displayResult(dealerContainer, dealerScore, playerScore);
}

// Crée les contrôles (input, bouton) pour lancer les dés
function createControls(playerContainer, dealerContainer) {
  const controlsContainer = document.createElement('div');
  controlsContainer.classList.add('controls-container'); // Applique une classe CSS

  const titleName = document.createElement('H1');
  titleName.textContent = 'Choisissez le nombre de dés à lancer '; // Texte du label

  const inputNumber = document.createElement('input');
  inputNumber.type = 'number'; // Champ de saisie pour le nombre de dés
  inputNumber.min = '1'; // Valeur minimale
  inputNumber.max = '6'; // Valeur maximale
  inputNumber.value = '1'; // Valeur par défaut

  const rollButton = document.createElement('button');
  rollButton.textContent = 'Jouer'; // Texte du bouton
  rollButton.addEventListener('click', () => {
    handleRollDice(playerContainer, dealerContainer, inputNumber); // Lancer les dés au clic
  });

  controlsContainer.append(titleName, inputNumber, rollButton); // Ajoute les éléments au conteneur
  document.body.append(controlsContainer); // Ajoute le conteneur au body
}

// Initialise la section "player" et "dealer" en utilisant les divs existantes
function createPlayerSection() {
  const playerContainer = document.getElementById('player'); // Conteneur du joueur
  const dealerContainer = document.getElementById('dealer'); // Conteneur du dealer

  createControls(playerContainer, dealerContainer); // Crée les contrôles
}

// Fonction principale pour initialiser le jeu
function initGame() {
  createPlayerSection(); // Initialise les sections du joueur et du dealer
}

// Initialiser le jeu
initGame();