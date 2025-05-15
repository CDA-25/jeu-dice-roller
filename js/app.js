window.addEventListener("load", function (){
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("dice");
    const player = document.querySelector("#player");
    player.appendChild(newDiv);


    // function for a random dice number
    function getRandomInt(max){
        return Math.floor(Math.random()* max +1);
    }

    let roller = getRandomInt(6);

    newDiv.style.backgroundPosition=`${(roller-1)*-100}px`;
    
});
