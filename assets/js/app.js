(function () {
  'use strict';

  var links = document.getElementsByClassName('js-contact-link');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", track_click, "false");
  }

  function track_click() {
    mixpanel.track("Clicked Link: " + this.href);
  }

})();
