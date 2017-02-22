'use strict';
(function () {
  

  window.colorizeElement = function (element, colors, property) {
    var currentColor = '#6589a4';

    element.addEventListener('click', function () {
      currentColor = window.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    });

    element.addEventListener('keydown', function (event) {
      if (event.keyCode === window.setup.ENTER_KEYCODE) {
        currentColor = window.getRandomElementExcept(colors, currentColor);
        element.style[property] = currentColor;
      }
    });
  };
})();
