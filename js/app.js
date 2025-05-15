// Tire un nombre aléatoire entre 1 et 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Modifie l'arrière-plan d'un dé en fonction d'un nombre aléatoire
function updateDiceBackground(diceElement) {
  const randomNumber = getRandomNumber();
  const positionX = (randomNumber - 1) * -100; // Chaque face fait 100px de large
  diceElement.style.backgroundPosition = `${positionX}px 0`;
}

// Crée un dé et l'ajoute à un conteneur
function createDice(container) {
  const dice = document.createElement('div');
  dice.classList.add('dice'); // Ajouter la classe 'dice' pour appliquer les styles
  container.append(dice); // Ajouter le dé au conteneur
  updateDiceBackground(dice); // Modifier l'arrière-plan du dé
}

// Calcule le score total des dés dans un conteneur
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

// Affiche les résultats dans un conteneur
function displayResult(container, score, opponentScore) {
  const resultDiv = document.createElement('div');
  resultDiv.style.textAlign = 'center';
  resultDiv.style.marginTop = '10px';

  if (score > opponentScore) {
    resultDiv.textContent = 'You win!';
  } else if (score < opponentScore) {
    resultDiv.textContent = 'You lose!';
  } else {
    resultDiv.textContent = 'Equality';
  }

  container.appendChild(resultDiv);
}

// Gère le clic sur le bouton "Jouer" pour lancer les dés
function handleRollDice(playerContainer, dealerContainer, inputNumber) {
  // Réinitialiser les dés
  playerContainer.innerHTML = '';
  dealerContainer.innerHTML = '';

  // Récupérer le nombre de dés à lancer
  const numberOfDice = parseInt(inputNumber.value, 10) || 1;

  // Créer les dés pour le joueur et le dealer
  for (let i = 0; i < numberOfDice; i++) {
    createDice(playerContainer);
    createDice(dealerContainer);
  }

  // Calculer les scores
  const playerScore = calculateScore(playerContainer);
  const dealerScore = calculateScore(dealerContainer);

  // Afficher les résultats
  displayResult(playerContainer, playerScore, dealerScore);
  displayResult(dealerContainer, dealerScore, playerScore);
}

// Crée les contrôles (input, bouton) pour lancer les dés
function createControls(playerContainer, dealerContainer) {
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

  const inputLabel = document.createElement('label');
  inputLabel.textContent = 'Choissez le nombre de dés à lancer ';
  const inputNumber = document.createElement('input');
  inputNumber.type = 'number';
  inputNumber.min = '1';
  inputNumber.max = '6';
  inputNumber.value = '1';

  const rollButton = document.createElement('button');
  rollButton.textContent = 'Jouer';
  rollButton.addEventListener('click', () => {
    handleRollDice(playerContainer, dealerContainer, inputNumber);
  });

  controlsContainer.append(inputLabel, inputNumber, rollButton);
  document.body.append(controlsContainer);
}

// Initialise la section "player" et "dealer" en utilisant les divs existantes
function createPlayerSection() {
  const playerContainer = document.getElementById('player');
  const dealerContainer = document.getElementById('dealer');

  createControls(playerContainer, dealerContainer);
}

// Fonction principale pour initialiser le jeu
function initGame() {
  createPlayerSection();
}

// Initialiser le jeu
initGame();