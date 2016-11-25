$(function() {
  var turn = 0;
  $('td').on('click', function() {

    if ($(this).text() === "") {
      if (turn % 2 === 0) {
      $(this).text('X');
      } else {
      $(this).text('O');
      };
      turn ++; } else {
    };
  });

  $('button').on('click', function() {
    $('.table-board td').empty();
  });

});

// don't allow the value to change if it isn't clear
