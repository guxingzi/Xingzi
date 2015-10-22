$(function() {
  $('nav').waypoint({
    handler: function(trigger) {
      if (trigger) {
        $(this.element).addClass('sticky');
      } else {
        $(this.element).removeClass('sticky');
      }
    }
  });
});

(function($) {
  
  'use strict';
  
  var Waypoint = {
    
    // Default options
    options: {
      wrapper: document,
      hanler: function(trigger) {},
      offset: 30
    },
    
    init: function(element, options) {
      
      // Mix in the passed-in options with the default options
      this.options = $.extend( {}, this.options, options );
      
      // Save the element reference, both as a jQuery
      // reference and a normal reference
      this.element  = element;
      this.$element = $(element);
      
      this.wrapper  = this.options.wrapper;
      this.$wrapper = $(this.wrapper);
      
      this.handler = this.options.handler;
      
      this.bindEvents();
      
      // return this so that we can chain and use the bridge with less code.
      return this;
    },
    
    bindEvents: function() {
      this.$wrapper.on('scroll', function(e) {
        var currYPos = this.$wrapper.scrollTop(),
            elHeight = this.$element.height(),
            trigger  = this.$element.offset().top - this.options.offset;
        
        if (currYPos >= trigger && currYPos >= elHeight) {
          this.handler(true);
        } else {
          this.handler(false);
        }
      }.bind(this));
    }
  };
  
  // Make it a plugin
  $.fn.waypoint = function (options) {
    return this.each(function () {
      var waypoint = $.extend({}, Waypoint);
      waypoint.init(this, options);
    });
  };
  
}(jQuery));