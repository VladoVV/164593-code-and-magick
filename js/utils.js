'use strict';

var utils = {};
utils.getRandomElement = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

utils.getRandomElementExcept = function (myArray, currentColorElem) {
  var colorElement = null;
  while (colorElement === currentColorElem || !colorElement) {
    colorElement = utils.getRandomElement(myArray);
  }
  return colorElement;
};

