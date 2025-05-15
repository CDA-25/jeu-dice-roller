window.addEventListener("load", function () {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dice");
    console.log(newDiv);
    const player = document.querySelector("#player");
    player.appendChild(newDiv);
});