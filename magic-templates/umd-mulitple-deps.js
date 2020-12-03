/**
 *  UMD Mulitple Deps and Methods Exposed
 *  =====================================
 *
 *  @description is capable of multiple deps and multiple exposed methods
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.jQuery);
  }
}(this, function ($) {
  //    methods
  function myFunc(){};

  //    exposed public method
  return myFunc;
}));
