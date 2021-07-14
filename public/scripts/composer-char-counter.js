$(document).ready(function() {
  $('#tweet-text').keydown(function() {
    const tweetLength = $(this).val().length;
    $('#counter').text(140 - tweetLength);
    // if characters are more that 140
    if (tweetLength > 140) {
      $('#counter').addClass('colorCounter');
      $('.errorSection').slideDown(1000).css('display', 'block');
    } else {
      $('#counter').removeClass('colorCounter');
      $('.errorSection').css('display', 'none');
    }
  });
});
