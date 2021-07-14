/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = (tweet) => {
  const $tweet = $(`<article class="previousTweetsArticle">
  <header class="headerPreviousTweets">
  <div class="headerPreviousIcon">
  <img src="${tweet.user.avatars}"/>
  <span class="nameTweetHeader">${tweet.user.name}</span>
  </div>
  <span class="emailTweetHeader">${tweet.user.handle}</span>
  </header>
  <div class="middlePreviousTweets">
  <label class="previousTweet">${tweet.content.text}</label>
  <span class="middleTweetBorder"></span>
  </div>
  <footer class="footerPreviousTweets">
  <span class="previousTweetDays need_to_be_rendered" datetime=${tweet.created_at}></span>
  <div class="previousFooterIcons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
  </footer>
</article>`);
  $('#TweetSection').prepend($tweet);
};

const renderTweets = function(tweetData) {
  $('#TweetSection').val('');
  for (const tweet of tweetData) {
    createTweetElement(tweet);
  }
  //timeago conditional statement
  if (document.querySelectorAll('.need_to_be_rendered').length !== 0) {
    timeago.format(new Date());
    timeago.render(document.querySelectorAll('.need_to_be_rendered'));
  }
};

$(document).ready(function() {
  //create form submission using Jquery
  $('#tweetForm').submit(function(event) {
    event.preventDefault();
    //form Validation testing that data is not empty
    if ($('#tweet-text').val() === '' || $('#tweet-text').val() === null) {
      alert('Tweet Empty. Please Try Again!');
      return;
    }
    if ($('#tweet-text').val().length > 140) {
      alert('Reached Max Characters. Please Try Again');
      return;
    }
    //Post Tweets with Ajax
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $('#tweetForm').serialize(),
    }).then(loadTweets);
  });

  //Fetching Tweets with Ajax
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' }).then(renderTweets);
    $('#tweet-text').val('');
  };
  loadTweets();
});

//check data is not empty "" or null
// the form should not be cleared \
//the form should not submit
