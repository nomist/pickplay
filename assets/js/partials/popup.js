$(document).ready(function() {
  $('#show_popup').click(function() {
    $('.popup').fadeIn(300);
    $("html,body").css("overflow","hidden");

  });
  $('#close_popup', 'body').click(function() {
    $('.popup').fadeOut(300);
    $("html,body").css("overflow","auto");
  });
});
