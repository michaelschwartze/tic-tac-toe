$(function() {
  var turn = 0;
  $('td').on('click', function() {
    if (turn % 2 === 0) {
    $(this).text('X');
    } else {
    $(this).text('O');
    };
    turn ++;
  });

});

$('button').on('click', function() {
  $('.table-board td').empty();
})
