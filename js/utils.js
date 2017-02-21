'use strict';
(function () {
  
  var utils = {};
  var getRandomElement = function (colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  window.getRandomElementExcept = function (colors, currentColorElem) {
    var colorElement = currentColorElem;
    while (colorElement === currentColorElem) {
      colorElement = getRandomElement(colors);
    }
    return colorElement;
  };

  return {
    getRandomElementExcept: getRandomElementExcept
  };
})();
