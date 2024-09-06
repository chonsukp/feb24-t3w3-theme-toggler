function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    // target of the drag event is the thing that we are dragging
    const elementID = event.currentTarget.id;
    event.dataTransfer.setData("text", elementID);
}

function drop(event) {
    event.preventDefault();
    // target of the drop event is the element below whatever our mouse is over when we stop the drag
    let data = event.dataTransfer.getData("text");

    let diceCopy = document.getElementById("diceImage").cloneNode(true);

    let diceCopyText = diceCopy.querySelector("p");
    diceCopyText.innerText = rollDice();

    event.target.appendChild(diceCopy);
}

function rollDice(diceSize = 20) {
    return Math.floor(Math.random() * diceSize) + 1;
}

let diceElement = document.getElementById("diceImage");
diceElement.addEventListener("dragstart", (event) => drag(event));
diceElement.draggable = true;

let diceRollingArea = document.getElementById("diceRollingArea");
diceRollingArea.addEventListener("drop", (event) => drop(event));
diceRollingArea.addEventListener("dragover", (event) => allowDrop(event));