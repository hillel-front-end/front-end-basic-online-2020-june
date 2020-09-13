/*
Lection 1 - JavaScript Intro
  1. JS Введение
  2. Подключение скриптов
  3. Именование переменных
  4. Переменные + типы(String, Number),  NaN,
  5. Консоль разработчика
  6. Operators
*/

/*
  # 1. JS Введение
   * LiveScript - JavaScript;
   * JavaScript — это язык программирования, который даёт возможность реализовывать сложное 
     поведение веб-страницы. Является интерпретируемым языком.
   * Интерпретация – это когда исходный код программы получает другой инструмент, который называют «интерпретатор», 
     выполняет его «как есть». При этом распространяется именно сам исходный код (скрипт). 
     Этот подход применяется в браузерах для JavaScript. 
*/

// Type: number 

//Integer age = 22;
//Double weight = 22.22222;

/*
  var age = 22;
  var personaAge = 12.22222;
*/
//console.log(age, personaAge);

// age = 25;
//console.log(age);

var sum = 12 + 12;
console.log(sum);
var diff = 12 - 12;
console.log(diff);
var mul = 12 * 12;
console.log(mul);
var div = 12 / 5;
console.log(div);
var mod = 12 % 5;
console.log(mod);


// var a = 12;
// var b = 5;
// var result;

var a = 12, 
    b = 5,
    c = 6, 
    result;


result = a + b * c; // result = 12 + 5 * 6


b = 122;
result = (a + b) * c; // (12 + 122) * 6

console.log(result, 'result');

b = 5;

// Type: String -> '', " "

// String login = 'Valera';
var login = 'Valera';
var password = "123,aaaavbb"

console.log(login, 'login');
console.log(password, 'password');



var first = "Front";
var last = "Basic";

var result = "Front" + " " + "end" + " "  + "Basic";
console.log(result, 'result');

var name = "Valery";
var lastName = "Ternavsky";

var resultSecond = name + lastName;

console.log(resultSecond, 'resultSecond');


var anotherResult = name * lastName;// "Valery" * "Ternavsky"
var anotherResult = name - lastName;// "Valery" - "Ternavsky"
var anotherResult = name / lastName;// "Valery" / "Ternavsky"
var anotherResult = name % lastName;// "Valery" % "Ternavsky"


console.log(anotherResult, 'anotherResult');//Not a Number

// 
console.log('2' + '3');
console.log('2' * '3');//2 * 3
console.log('2abc' / '2');
console.log('2abc' + '2');


// явно

console.log(+'1223312');
console.log(+'111aaaa');


console.log(parseInt('111a333aaa'), 'parseInt'); //111

// var foo = '111555a22c333';
var foo = 'aa111555a22c333';
var resultParse = parseInt(foo);//

console.log(resultParse, 'res');


var g = prompt();

console.log(g , 'g ');

document.write(resultParse);

