const winnerMessage = document.querySelector("#winner-message");
const diceOne = document.querySelector("#dice-one");
const diceTwo = document.querySelector("#dice-two");

function generateRanNum() {
    return Math.floor(Math.random() * 6) + 1
}

function changeDice(n, dice) {
    switch(n) {
        case 1: 
        dice.src = "./images/dice1.png";
        break;
        case 2: 
        dice.src = "./images/dice2.png";
        break;
        case 3: 
        dice.src = "./images/dice3.png";
        break;
        case 4: 
        dice.src = "./images/dice4.png";
        break;
        case 5: 
        dice.src = "./images/dice5.png";
        break;
        case 6: 
        dice.src = "./images/dice6.png";
        break;
     }
}

function roll() {
 let n1 = generateRanNum()
 let n2 = generateRanNum()

 changeDice(n1, diceOne)
 changeDice(n2, diceTwo)

 if (n1 > n2) {
    winnerMessage.textContent = "Player1 wins"
 } else if (n1 < n2) {
    winnerMessage.textContent = "Player2 wins"
 } else {
    winnerMessage.textContent = "Tie"
 }
}