$(function() {

  $("#message").hide();
  $("#action").hide();

  $("#ready").on('click', function() {
    var name = $('#name').val();
    $("#message").show();
    $("#register").html(name + ',');
    $("#message").show();
    $("#action").show();
  });

  $("#rock")
  .click(function() {
    game = new Game("rock");
    alert(game.comChoice + game.userChoice);
  });

  $("#paper")
  .click(function() {
    game = new Game("paper");
    game.match();
  });

  $("#scissors")
  .click(function() {
    game = new Game("scissors");
    alert("Scissors");
  });

  $("#lizard")
  .click(function() {
    game = new Game("lizard");
    alert("Lizard");
  });

  $("#spock")
  .click(function() {
    game = new Game("spock");
    alert("Spock");
  });

});

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
  this.
}