const container = document.querySelector("#player");
const dealerContainer = document.querySelector("#dealer");
const app = document.getElementById('app')


const label = document.createElement('label')
label.textContent = "Combien Dés Chacal ?"
label.setAttribute("for", "dicesInput");

const input = document.createElement('input')
input.type = "text"
input.id = "dicesInput"

const button = document.createElement('input')
button.type = "button"

app.insertBefore(button, app.firstChild)
app.insertBefore(input, app.firstChild)
app.insertBefore(label, app.firstChild)

button.addEventListener("click", () => {
    jouer(input.value)
})


function addDe(pos) {
  const dice = document.createElement("div");
  dice.classList.add("dice");
  pos.appendChild(dice);
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.style.backgroundPosition = `-${(randomNumber - 1) * 100}px 0`;
}

function jouer(nb) {
  container.textContent = ""
  dealerContainer.textContent = ""
  if (!isNaN(nb) && nb > 0) {
    for (let i = 0; i < nb; i++) {
      addDe(container);
      addDe(dealerContainer);
    }
  } else {
    alert("Vous n'avez pas saisi un chiffre");
  }
}