(function ($, window, document) {
  $(window).ready(function() {
    'use strict';

    $(window).resize(function() {
      $('.wrapper-intro').css('min-height', $(window).height());
    });

    $(window).resize();
    $.localScroll();

  });
})(jQuery, this, this.document);
