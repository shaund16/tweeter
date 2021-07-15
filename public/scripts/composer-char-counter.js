$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const maxLength = 140;
    let tweetLength = $(this).val().length;
    $(this).siblings('div').children('#counter').text(maxLength - tweetLength);
    // if characters are more that 140
    if (tweetLength > maxLength) {
      $('#counter').addClass('colorCounter');
      $('.errorSection').slideDown(1000).css('display', 'block');
    } else {
      $('#counter').removeClass('colorCounter');
      $('.errorSection').css('display', 'none');
    }
  });
});
