$(document).ready(function() {
  $('#tweet-text').keydown(function() {
    const tweetLength = $(this).val().length;
    $('#counter').text(140 - tweetLength);
    if (tweetLength > 140) {
      $('#counter').addClass('colorCounter');
    } else {
      $('#counter').removeClass('colorCounter');
    }
  });
});
