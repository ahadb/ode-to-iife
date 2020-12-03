/**
 *  Anonymous School IIFE Pattern
 *  =============================
 *
 *  @description immediately invoked function that sets up and encapsulates your library for different environments and instantiates it
 *               this is relevant when you create a small library and don't need all the overhead that transpilers and bundlers offer
 *
 */

(function() {

  /**
   *  Constructor
   *  ===========
   *
   *  @param: {None} however you can pass another function in if needed
   *  @returns {Object} this
   */

  function MyLibrary() {
    if (!(this instanceof MyLibrary)) {
      return new MyLibrary()
    }

    return this
  }

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
   *  Basic Methods on Prototype
   *  ==========================
   *
   *  @description just a dummy for your first function in your makeshift library
   *
   *  @param: {Mixed} any amount of arguments
   *  @returns {Array} array of arguments
   */

  MyLibrary.prototype.getArgs = function() {
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
    window.myLibrary = new MyLibrary();
  }

  // CommonJS module, you will use require() to consume
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MyLibrary;
    }
    exports.MyLibrary = MyLibrary;
  }

})();
