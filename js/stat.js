'use strict';

window.renderStatistics = function (ctx, names, times) {
  var fontType = '16px PT Mono';
  var textYouWin = 'Ура вы победили!';
  var textListResult = 'Список результатов:';
  var colorBlack = 'rgb(0, 0, 0)';
  var colorRed = 'rgba(255, 0, 0, 1)';
  var widthCanvas = 420;
  var heightCanvas = 270;
  var histoHeight = 150; // Максимальная высота гистограммы
  var histoX = 140; // Отступ по оси X
  var histoY = 100; // Отступ по оси Y
  var max = -Infinity; //Для поика максимального элемента масива
  var columnWidth = 40; // Задаем ширину колонки гистограммы
  var indent = 50; // Расстояние между колонками
  var columnIndent = columnWidth + indent; // Ширина колонки с отступом

  // Рисуем тень от холста
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, widthCanvas, heightCanvas);

  // Рисуем холст
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, widthCanvas, heightCanvas);
  ctx.fillRect(100, 10, widthCanvas, heightCanvas);

  // Задаем цвет и тип шрифта
  ctx.fillStyle = colorBlack;
  ctx.font = fontType;

  // Пишем текст
  ctx.fillText(textYouWin, 120, 40);
  ctx.fillText(textListResult, 120, 60);

  //Определяем максимальный элемент массива times
  for (var i = 0; i < times.length; i++ ) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  var step = histoHeight / max; // Определяем шаг/масштаб гистограммы

  // Рисуем колонки и подписи к ним с помощью цикла
  for (i = 0; i < times.length; i++) {
    var name = names[i]; // Получаем имя игрока из массива names
    var time = times[i]; // Получаем время игры из массива times для конкретного игрока

    var height = step * time; // Определяем высоту колонки для конкретного игрока

    if (names[i] === 'Вы') {
      ctx.fillStyle = colorRed; // Если имя игрока == "Вы" задаем красный цвет
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ' )'; // Если имя игрока любое кроме "Вы", задаем цвет синим с рандомной прозрачностью
    }
    ctx.fillRect(histoX + columnIndent * i, histoY + (histoHeight - step * time), columnWidth, height); // Т.к. координаты начинаются сверху, для того чтобы выровнять гистограмму по нижней границе, прибавляем к координате Y разницу между максимальной высотой гистограммы histoHeight и высотой колонки height

    ctx.fillStyle = colorBlack;
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, (80 - step * time) + histoHeight); // Печатаем время игрока time[i] над колонкой
    ctx.fillStyle = colorBlack;
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20); // Печатаем имя игрока под колонкой
  }

};
var canvas = document.querySelector('canvas');

//window.renderStatistics(canvas.getContext('2d'), ['Света', 'Ира', 'Андрей', 'Вы'], [2233, 4456, 8133, 1581]);
