/**
 *  UMD Module Definition
 *  ======================
 *
 *  @description this UMD pattern rules them all, no transpilers, bundlers and should work in all environments
 *
 */

// you could use root here as global
(function (global, appName, app) {

  /**
   * AMD / Require
   *
   * @description define the module using AMD / Require
   */
  if (typeof define === "function" && typeof define.amd === "object")
    define(app);

  /**
   * AMD / Require
   *
   * @description export as a node or CommonJS module
   */
  else if (typeof module !== "undefined") module.exports = app(global);

  /**
   * AMD / Require
   *
   * @description add the app to the global browser namespace
   */

  else global[appName] = app(global);
})(this, "YourAppNameHere", function (global) {
  "use strict";

  // define private functions here
  function _initializeOptions(options, defaults) {
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

  // define public functions here
  function getArgs(options) {
    // use options, pass in to function and options = initOptions(options, {})
    var args = Array.prototype.slice.call(arguments)

    return args
  }

  // return publically accessibale functions
  return {
    getArgs: getArgs
  };
});
