/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1625927750576,
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1626014150576,
  },
];

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
  $('#TweetSection').append($tweet);
};

const renderTweets = function(tweet) {
  for (const tweet of tweetData) {
    createTweetElement(tweet);
  }
};

$(document).ready(function() {
  renderTweets(tweetData);
});
