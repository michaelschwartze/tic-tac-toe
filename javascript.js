$(function() {

  var turn = 0;
  var gameStatus = 'playing';

  var clearMsg = function() {
    $('#msg-text').text("")
  };

  function areEqual() {
    for (var i = 1; i < arguments.length; i++){
      if (arguments[i] == null || arguments[i] != arguments[i-1] || arguments[i] === "")
        return false;
    }
    return true;
  };

  var checkForWin = function(){
    for (var i = 0; i <= 2; i++) {
      var row = $('*[data-row-num=' + (i + 1) + '] td').text();
      var a = row.substr(0,1);
      var b = row.substr(1,1);
      var c = row.substr(2,1);
      var col = $('*[data-col-num=' + (i + 1) + ']').text();
      var d = col.substr(0,1);
      var e = col.substr(1,1);
      var f = col.substr(2,1);
      if ((areEqual(a,b,c) === true) || (areEqual(d,e,f) === true)) {
        $('#msg-text').text(row.substr(0,1)+ ' Wins!');
        gameStatus = 'over';
      }
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
    gameStatus = 'playing';
    turn = 0;
  });

});
