  function rollDice() {

    /* DICE ARRAY */
    var diceArray = ["CSS/images/dice1.png", "CSS/images/dice2.png", "CSS/images/dice3.png", "CSS/images/dice4.png", "CSS/images/dice5.png", "CSS/images/dice6.png"];


    /* DICE ROLL */
    var randomRoll1 = Math.random();
    randomRoll1 = Math.floor(randomRoll1 * 6);
    var newDice1 = diceArray[randomRoll1];


    var randomRoll2 = Math.random();
    randomRoll2 = Math.floor(randomRoll2 * 6);
    var newDice2 = diceArray[randomRoll2];


    document.querySelector(".player-1-dice").setAttribute("src", newDice1);

    document.querySelector(".player-2-dice").setAttribute("src", newDice2);


    /* WINNER ANNOUNCEMENT */
    if (newDice1 > newDice2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    } else if (newDice2 > newDice1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    } else if (newDice1 === newDice2) {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }

    /* END OF DICE ROLL FUNCTION */
  }
