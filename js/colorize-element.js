'use strict';
var utils = window.utils;

window.colorizeElement = function (element, colors, property) {
  var currentColor = '#6589a4';

  element.addEventListener('click', function () {
    currentColor = utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  });

  element.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEYCODE) {
      currentColor = utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    }
  });
};
