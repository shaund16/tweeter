$(document).ready(function() {
  if (document.querySelectorAll('.need_to_be_rendered').length !== 0) {
    timeago.format(new Date());
    timeago.render(document.querySelectorAll('.need_to_be_rendered'));
  }
  console.log(document.querySelectorAll('.need_to_be_rendered'))
});