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
    $("#register").hide();
    $("#message").html(game.result);
    $("#rock").toggle(100).toggle(100);
  });

  $("#paper")
  .click(function() {
    game = new Game("paper");
    $("#register").hide();
    $("#message").html(game.result);
    $("#paper").toggle(100).toggle(100);
  });

  $("#scissors")
  .click(function() {
    game = new Game("scissors");
    $("#register").hide();
    $("#message").html(game.result);
    $("#scissors").toggle(100).toggle(100);
  });

  $("#lizard")
  .click(function() {
    game = new Game("lizard");
    $("#register").hide();
    $("#message").html(game.result);
    $("#lizard").toggle(100).toggle(100);
  });

  $("#spock")
  .click(function() {
    game = new Game("spock");
    $("#register").hide();
    $("#message").html(game.result);
    $("#spock").toggle(100).toggle(100);
  });

});