(function ($, window, document) {
  $(window).ready(function() {
    'use strict';

    $(window).resize(function() {
      $('.wrapper-intro').css('height', $(window).height() - 10);
    });

    $(window).resize();

  });
})(jQuery, this, this.document);
