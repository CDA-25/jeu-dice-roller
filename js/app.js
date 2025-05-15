// Fonction pour tirer un nombre aléatoire entre 1 et 6
function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Fonction pour mettre à jour la face d'un dé
function updateDiceFace(dice, number) {
  const offsetX = -(number - 1) * 100;
  dice.style.backgroundPosition = `${offsetX}px 0`;
}

// Fonction générique pour créer des dés dans un conteneur donné
function creerDes(nb = 6, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (let i = 0; i < nb; i++) {
    const dice = document.createElement("div");
    dice.classList.add("dice");

    const face = getRandomDiceNumber();
    updateDiceFace(dice, face);

    container.appendChild(dice);
  }
}

// Fonction générique pour relancer les dés et retourner la somme
function lancerDesEtCalculerScore(containerId) {
  const des = document.getElementById(containerId).querySelectorAll(".dice");
  let score = 0;

  des.forEach(dice => {
    const face = getRandomDiceNumber();
    updateDiceFace(dice, face);
    score += face;
  });

  return score;
}

// Demander le nombre de dés
let nbDes = parseInt(prompt("Combien de dés veux-tu ?", "6"));
if (isNaN(nbDes) || nbDes < 1) nbDes = 6;

// Créer les dés au départ
creerDes(nbDes, "player");
creerDes(nbDes, "dealer");

// Fonction principale : lancer, calculer, afficher
function lancerTousLesDes() {
  const scorePlayer = lancerDesEtCalculerScore("player");
  const scoreDealer = lancerDesEtCalculerScore("dealer");

  document.getElementById("scorePlayer").textContent = `Score Joueur : ${scorePlayer}`;
  document.getElementById("scoreDealer").textContent = `Score Adversaire : ${scoreDealer}`;

  let resultat = "";
  if (scorePlayer > scoreDealer) {
    resultat = "🎉 Vous avez gagné !";
  } else if (scorePlayer < scoreDealer) {
    resultat = "😞 Vous avez perdu.";
  } else {
    resultat = "🤝 Égalité.";
  }

  document.getElementById("resultat").textContent = resultat;
}

// Lier le bouton
document.getElementById("rollBtn").addEventListener("click", lancerTousLesDes);
