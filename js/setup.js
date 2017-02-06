'use strict';

var openWindow = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var closeWindow = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('#wizard-coat'); // находим элемент в разметке отвечающий за накидку
var colorWizardCoat = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
]; // задаем массив с возможными цветами для накидки
var wizardEyes = document.querySelector('#wizard-eyes'); // находим элемент в разметке отвечающий за глаза
var colorEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
]; // задаем массив с возможными цветами для глаз
var setupFireball = document.querySelector('.setup-fireball'); // находим элемент в разметке отвечающий за фаербол
var setupFireballWrap = document.querySelector('.setup-fireball-wrap'); // находим элемент в разметке отвечающий за цвет фаербола
var colorFireball = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
]; // задаем массив с возможными цветами для фаербола
var ENTER_KEYCODE = 13;
var ESCAPE_KEYCODE = 27;
var buttonSetupSubmit = document.querySelector('.setup-submit');

// Функция - Когда происходит событие event и это событие = нажатию на ентер
var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEYCODE;
};

// Функция - Отслеживаем событие - нажатие кнопки Esc, если событие происходит закрываем окно setup (Отслеживаем событие только в setup)
var setupKeyDownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEYCODE) {
    setup.classList.add('invisible');
  }
};

// Функция - Открываем элемент setup и отслеживаем событие (нажатие Esc - при котором окно setup закроется)
var showSetupElement = function () {
  setup.classList.remove('invisible');
  setup.setAttribute('aria-hidden', 'false');
  document.addEventListener('keydown', setupKeyDownHandler);
};

// Функция - Закрываем окно setup
var hideSetupElement = function () {
  setup.classList.add('invisible');
  setup.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', setupKeyDownHandler);
};

// ---Открываем окно---//
// Отслеживаем событие клик на аватарке, когда случится событие удаляем класс скрывающий объект
openWindow.addEventListener('click', function () {
  showSetupElement();
});

// Отслеживаем событие нажатие кнопки ентер на аватарке
openWindow.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showSetupElement();
  }
});

// ---Закрываем окно---//
// Отслеживаем событие клик на крестике, когда случится событие добавляем класс скрывающий объект
closeWindow.addEventListener('click', function () {
  hideSetupElement();
});

// Отслеживаем событие нажатие Esc, когда случится событие добавляем класс скрывающий объект
closeWindow.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    hideSetupElement();
  }
});

// Закрываем окно setup при клике на кнопку сохранить
buttonSetupSubmit.addEventListener('click', function (event) {
  hideSetupElement();
});

// Закрываем окно setup если нажать на кнопку сохранить
buttonSetupSubmit.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    hideSetupElement();
  }
});

// ---изменение цвета накидки---//
// выбираем случайный цвет из массива
function randColorWizardCoat() {
  return colorWizardCoat[Math.floor(Math.random() * colorWizardCoat.length)];
}

// отслеживаем клик по накидке и меняем задаем ей случайный цвет
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = randColorWizardCoat();
});


// ---меняем цвет глаз волшебника---//
// выбираем случайный цвет из массива
function randColorEyes() {
  return colorEyes[Math.floor(Math.random() * colorEyes.length)];
}
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = randColorEyes();
});


// ---меняем цвет фаербола---//
// выбираем случайный цвет из массива
function randColorFireball() {
  return colorFireball[Math.floor(Math.random() * colorFireball.length)];
}

setupFireball.addEventListener('click', function () {
  setupFireballWrap.style.background = randColorFireball();
});
