$(function() {

  var turn = 0;
  var clearMsg = function() {
    $('#msg-text').text("")
  };

  var gameStatus = 'playing';

  var checkForWin = function(){
    var row = $('*[data-row-num=1] td').text();
    if (row === 'XXX') {
      $('#msg-text').text('X Wins!');
      gameStatus = 'over';
    }
  };

  $('td').on('click', function() {
    if (gameStatus === 'playing') {
      clearMsg();
      if ($(this).text() === "") {
        if (turn % 2 === 0) {
          $(this).text('X');
        } else {
          $(this).text('O');
        };
        turn ++;
      } else {
        $('#msg-text').text("Cell taken, try another.");
      };
      checkForWin();
    };
  });

  $('button').on('click', function() {
    $('.table-board td').empty();
    clearMsg();
  });

});
