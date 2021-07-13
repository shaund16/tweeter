$(document).ready(function() {
  timeago.format(new Date());
  timeago.render(document.querySelectorAll('.need_to_be_rendered'));
});