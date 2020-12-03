/**
 *  Named IIFE Pattern
 *  ==================
 *
 *  @description immediately invoked function that sets up and encapsulates your library for different environments and instantiates it
 *               this is relevant when you create a small library and don't need all the overhead that transpilers and bundlers offer
 *
 */

var MyLibrary = (function(library) {

  /**
   *  Helpers
   *  ===========
   *
   *  @description: stub a basic helper function for options, old school way
   *
   *  @param: {Object}
   *  @returns {Object}
   */

  function initializeOptions(options, defaults) {
    options = options || {};

    if (defaults) {
      for (var i in defaults) {
        if (typeof options[i] === 'undefined') {
          options[i] = defaults[i];
        }
      }
    }

    return options;
  }

  /**
   *  Simple Method
   *  ==============
   *
   *  @description just a dummy for your first function in your makeshift library
   *
   *  @param: {Mixed} any amount of arguments
   *  @returns {Array} array of arguments
   */

  library.getArgs = function() {
    // use options, pass in to function and options = initOptions(options, {})

    var args = Array.prototype.slice.call(arguments)

    return args
  }

  // ....

  /**
   *  Expose our little library
   *  ==========================
   *
   *  @description exposing our API to different environments
   *
   */

  // Window
  if (typeof window === "object" && typeof window.document === "object") {
    window.MyLibrary = MyLibrary;
    //window.myLibrary = new MyLibrary();
  }

  // CommonJS module, you will use require() to consume
  if (typeof exports === "object") {
    module.exports = library;
    // now the Mocha tests can import it!
  }

  return library

})(MyLibrary || {});
