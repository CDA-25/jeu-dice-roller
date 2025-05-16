window.addEventListener("load", function (){
    const player = document.querySelector("#player");

    function createDice(targetId){
        const newDiv = document.createElement("div");
        newDiv.classList.add("dice");

        let roller = getRandomInt(6);
        newDiv.style.backgroundPosition=`${(roller-1)*-100}px`;

        const targetElement = document.querySelector(`#${targetId}`);
        targetElement.appendChild(newDiv);
    }

    // function for a random dice number
    function getRandomInt(max){
        return Math.floor(Math.random()* max +1);
    }

   function howManyDice(){
        let nbOfDice=prompt(`Combien de dé(s) voulez-vous lancer ?`, 1);
        nbOfDice = Number.parseInt(nbOfDice);

        while(isNaN(nbOfDice) || nbOfDice<=0){
            alert("Veuillez rentrer un nombre valide !");
            nbOfDice=prompt(`Combien de dé(s) voulez-vous lancer ?`, 1);
            nbOfDice = Number.parseInt(nbOfDice);
        }
        return nbOfDice;
    }

    const playerDice = howManyDice();
   
    const dealer = document.createElement("div");
    dealer.classList.add("board");
    dealer.id = "dealer";
    document.body.appendChild(dealer);
    

   if (playerDice > 0){
    for (let i=0; i<playerDice; i++){
        createDice('player');
        createDice('dealer')
    }
   }
});