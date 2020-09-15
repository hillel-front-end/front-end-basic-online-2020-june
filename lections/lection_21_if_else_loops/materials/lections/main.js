/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/

// ------- Повторение ----------

// "123" + "abc" "123abc"

// 123 + "abc"  => "123abc"
// 123 - "abc" => NaN

// ------------- null, undefined ------------

// var a; // undefined
var a = 1213;

// console.log(a, 'a');

// a = undefined;
// a = null;

// console.log(+'123');
// console.log(parseInt('222aaaa'));
// console.log(+null, 'null');
// console.log(+undefined, 'undefined');



/*
  *****************************************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0

   +""    ->  0      (пустая строка - 0)

   +"123" -> 123 (число в строке - число)

   +true\false -> 1\0

   +"abc" -> NaN (при ошибке результат NaN)
   
   +undefined -> NaN

  *****************************************************
*/




// ------------- typeof -----------------

var foo = '123';
var fooSecond = 123;

// console.log(typeof foo, 'foo');
// console.log(typeof fooSecond, 'fooSecond');



// ------------- smart operation  ----------

// var index = 0;
// index = index + 1;
// console.log(index, 'index 1 ');
// index = index + 1;
// console.log(index, 'index 2 ');

// index += 1; // index = index + 1;

// // index *= 2; // index = index * 2;
// console.log(index, 'index 3');

// index++
// ++index;
// index--;// index = index - 1;
// --index;// index = index - 1;
// console.log(index, 'index 4'); // index = index + 1;



// var number = parseInt('123'); // number = 123;
// console.log(index, 'before');
// var a = index++;
// console.log(index, 'after');
// console.log(a, 'a');

// console.log(index, 'before');
// var a = ++index;
// console.log(index, 'after');
// console.log(a, 'a');


// ============ Boolean ===============

// Boolean [true , false]
var bool = true;
var boolSecond = false;


// ------------- Logical operators [>,<, >=, <=, ==, ====, !] -----------------------
 
// var result = 3 > 5;
// console.log(result, 'result');

// var result = 3 < 5;
// console.log(result, 'result');


// var a = 2;
// var b = 4;

// var result = a >= b;
// console.log(result, 'result a >= b');

// var result = a <= b;
// console.log(result, 'result a <= b');


// var a = 3;
// var b = 4;
var a = '4';
var b = 4;

var result = a == b;
console.log(result, 'result a == b');

var result = a === b;
console.log(result, 'result a == b');

var result = true > false;

// +true -> 1
// +false -> 0

console.log(result, 'true > false')

// !

console.log(!'123'); //'123' -> true -> false
console.log(!!'123'); //'123' -> true -> false -> true
console.log(Boolean('123'))
console.log(!!null, 'null');
console.log(Boolean(null), 'null');

/* 
*****************************************************
============= Важно помнить преобразования к Boolean ===============

    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true

*****************************************************
*/








// ------------- Conditional -------------

/*
    if (условие) {
        тело условия if
    } 

    if (условие) {
        тело условия if
    } else {

    }
*/

var foo = false;

// console.log('Я дома');

// console.log('Я на работе');

if (111111) {
    console.log('I`am front-end Deleveloper');
} else {
    console.log('I`am not front-end Deleveloper');
}




/*
    if (условие) {
       тело условия if
    } else if(условие) {
       тело условия else-if
    } else {
        тело условия else
    }

*/

var time = 21;
var greeting = '';

if (time < 10) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good day';
} else if(time < 24) {
    greeting = 'Good evening';
} else {
    greeting = 'Good night';
}

// alert('User ' + greeting);




// if (age > 18 && age < 25) {
//     console.log('toDo ...');
// } else {

// }


age = 17;

//true && false -> false
//false && true -> false
//true && true -> true
//false && false -> false

if (age > 18 && age < 25 ) {
    console.log('work');
} else {
    console.log('does not work');
}

//true || false -> true
//false || true ->  true
//true || true -> true
//false || false ->  false

age = 12;
role = 'admin';

if (age > 18 || role == 'admin' ) {
    if (login == 'valera') {
        console.log('hello Valera')
    }
} else {
    console.log('does not work');
}


