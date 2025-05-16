const containerPlayer = document.getElementById('player');
const containerDealer = document.getElementById('dealer');
const containerApp = document.getElementById('app');

function createDice () {
  const dice = document.createElement('div');
  dice.classList.add('dice');
  return dice;
}

const createBtn = (input) => {
  const btn = document.createElement('button')
  btn.textContent = 'Jouer'
  btn.addEventListener("click", function() {
    
    while (containerPlayer.firstChild) {
      containerPlayer.removeChild(containerPlayer.firstChild)
    }
    
    const valueInput = input.value
    for (let i = 0; i < valueInput; i++) {
      addDiceInContainer(containerPlayer)
    }
  })
  
  return btn
}

function createInput() {
  const input = document.createElement('input')
  input.type = 'number'
  input.min = 1
  input.max = 6
  input.value = 1
  
  return input
}

function createLabel() {
  const label = document.createElement("label")
  label.textContent = "Nombre de dés"
  return label
}

function addDiceInContainer (container) {
  const dice = createDice()
  container.appendChild(dice)
}

const getRandomDiceValue1to6 = () => Math.floor(Math.random() * 6) + 1

function addElementsInApp() {
  const input = createInput()
  const label = createLabel()
  const btn = createBtn(input)
  
  containerApp.insertBefore(btn, containerApp.firstChild) // 3 -> 1
  containerApp.insertBefore(input, containerApp.firstChild) // 2 -> 2
  containerApp.insertBefore(label, containerApp.firstChild) // 1 -> 3
}

addElementsInApp()
addDiceInContainer(containerPlayer)



































