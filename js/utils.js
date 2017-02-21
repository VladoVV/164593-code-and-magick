'use strict';
(function () {
  
  var utils = {};
  utils.getRandomElement = function (colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return window.getRandomElementExcept = function (colors, currentColorElem) {
    var colorElement = currentColorElem;
    while (colorElement === currentColorElem) {
      colorElement = utils.getRandomElement(colors);
    }
    return colorElement;
  };

})();
