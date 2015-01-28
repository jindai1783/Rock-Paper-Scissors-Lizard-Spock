function Game(userChoice) {
  this.userChoice = userChoice;
  this.comRandom = Math.random();
  this.getComChoice = function(comRandom) {
    if (comRandom <= 0.2)
      return("rock");
    else if (comRandom > 0.2 && comRandom <= 0.4)
      return("paper");
    else if (comRandom > 0.4 && comRandom <= 0.6)
      return("scissors");
    else if (comRandom > 0.6 && comRandom <= 0.8)
      return("lizard");
    else
      return("spock");
  };
  this.comChoice = this.getComChoice(this.comRandom);
  this.getWinner = function(userChoice, comChoice) {
    if ((userChoice === "rock" && comChoice === "rock") ||
        (userChoice === "paper" && comChoice === "paper") ||
        (userChoice === "scissors" && comChoice === "scissors") ||
        (userChoice === "lizard" && comChoice === "lizard") ||
        (userChoice === "spock" && comChoice === "spock"))
      return("it's a draw!");
    else if ((userChoice === "rock" && comChoice === "scissors") ||
             (userChoice === "rock" && comChoice === "lizard") ||
             (userChoice === "paper" && comChoice === "rock") ||
             (userChoice === "paper" && comChoice === "spock") ||
             (userChoice === "scissors" && comChoice === "paper") ||
             (userChoice === "scissors" && comChoice === "lizard") ||
             (userChoice === "lizard" && comChoice === "paper") ||
             (userChoice === "lizard" && comChoice === "spock") ||
             (userChoice === "spock" && comChoice === "rock") ||
             (userChoice === "spock" && comChoice === "scissors"))
      return("you win!");
    else
      return("computer beat you...");
  };
  this.winner = this.getWinner(this.userChoice, this.comChoice);
  this.result = "You choose " + this.userChoice + ", computer choose "
                + this.comChoice + ", " + this.winner;
}