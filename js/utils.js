'use strict';
(function () {

  window.getRandomElementExcept = function (colors, currentColorElem) {
    var colorElement = currentColorElem;
    
    var getRandomElement = function (colors) {
    return colors[Math.floor(Math.random() * colors.length)];
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
