'use strict';
(function () {

  window.getRandomElementExcept = function (colors, currentColorElem) {
    var colorElement = currentColorElem;

    var getRandomElement = function (arrColors) {
      return arrColors[Math.floor(Math.random() * arrColors.length)];
    };

    while (colorElement === currentColorElem) {
      colorElement = getRandomElement(colors);
    }
    return colorElement;
  };

  return {
    getRandomElementExcept: window.getRandomElementExcept
  };
})();
