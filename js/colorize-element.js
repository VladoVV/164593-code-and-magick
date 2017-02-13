'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = 
  element.addEventListener('click', function () {
    element.style.property = utils.getRandomElementExcept(colors, currentColor);
  });
};
