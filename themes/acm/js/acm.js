/**
 * @file
 * Custom ACM theme behaviour.
 *
 */
(function ($, Drupal) {

  /**
   * Initialize foundation framework JS.
   */
  Drupal.behaviors.initFoundation = {
    attach: function (context, settings) {
      $(document).once().foundation();
    }
  };

})(jQuery, Drupal);
