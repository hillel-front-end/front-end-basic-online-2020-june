/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
 * 
 * Практика:
  - min, max (10 - 20),
*/


/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
  Math.random() * (max - min) + min;
*/
var max = 10, min = 5;

var random = Math.random() * (max - min) + min;
console.log(random, 'random');
// var roundValue = Math.round(random);
// var roundValue = Math.floor(random);
// var roundValue = Math.ceil(random);

// console.log(roundValue, 'roundValue');

// ---- Array ------

var player = 'Valera';
var playerSecond = 'Alex';

// var team = [player, playerSecond];
var team = ['Valera', 'Alex', 'Petro', 'Pety', 'Ighor'];

console.log(team, 'team');

console.log(team[1], 'team[1]');

console.log(team.length, 'length');

console.log(team[team.length - 1], 'always last');

console.log(team[0], 'always first');

console.log(team[Math.floor(team.length / 2)], 'center');

team[team.length - 1] = 'Yoyo';

console.log(team, 'after write Yoyo');


team[500] = 'Hohoho';

console.log(team, 'after write Hohoho');


team.length = 5000;

console.log(team, 'team with length 5000');



// var playersCount = 2;
// var team = [];

// team.length = playersCount;

console.log(team, 'team');


// for (var i = 0; i < team.length; i++) {
//   console.log(i, 'i');
//   var name = prompt('Input your name');
//   console.log(name, 'name');
//   //insert to array

//   team[i] = name;
// }


var team = [];
console.log(team, 'team');

do {
  var name = prompt('input name')
  team[team.length] = name;
  console.log(team, 'team');
  var isInput = confirm('is input again?');

} while (isInput)


console.log(team[team.length - 1], 'last');
console.log(team[team.length], 'team[team.length] -> create new last element');


