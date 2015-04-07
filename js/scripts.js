(function ($, window, document) {
  $(window).ready(function() {
    'use strict';

    $(window).resize(function() {
      $('.wrapper-intro').css('height', $(window).height() - 10);
    });

    $(window).resize();

    $('.learn-more').click(function(event) {
      event.preventDefault();
      var offsetTop = $('#about').offset().top - 70;
      $(window).scrollTo(offsetTop, 1000, 'ease-in-out');
    });

  });
})(jQuery, this, this.document);
