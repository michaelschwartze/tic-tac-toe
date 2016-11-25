$(function() {

  var turn = 0;
  var clearMsg = function() {
    $('#msg-text').text("")
  };

  $('td').on('click', function() {
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
  });

  $('button').on('click', function() {
    $('.table-board td').empty();
    clearMsg();
  });

});
