// /*
//   Lection 6 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

function create() {

}


function del() {

}


function update() {
   console.log('updated');
}

var sum = function() {
   console.log('work');
   update();
};

sum();

function mul(a, v) {
   // var a = 15;
   // var v = 10;
   var v = v || 5;
   var result = a * v;// 10 * undefined 

   console.log(result);
}
 
// mul(1, 2);

// mul(12, 1444);

mul(10);
mul(10, 10, 10, 10, 10);

// mul();
// mul();
// mul();

// console.log(a, 'a');
// console.log(v, 'v');


function div(a, b) {
   // var arguments = [10, 5, 2, 3]

   console.log(arguments, 'arg');
   // arguments.push('abc');
   // console.log(arguments, 'arg');

   // console.log(arr, 'ar');
   console.log(a / b);
}

div(10, 5, 2, 3);


function sumSecond(a, b) {
   // return '';

   if (b == undefined) {
      return null;
   }

   //return
   // console.log(a + b);
   // var g = a + b;

   return a + b;
}


var z = sumSecond(1, 2);

console.log(z, 'z');

var h ;
h = sumSecond(100, 2);

h = sumSecond(100);

console.log(h, 'h');

function getRandom(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

function arrayFiller(min, max, array) {

   for(var i = 0; i < array.length; i++) {
      array[i] = getRandom(min, max);
   }


   return array;
}

var arr = new Array(5);

// var arr = [];
// arr.length = 5;
var z = arrayFiller(1, 10, new Array(5));

console.log(z, 'z');
//break

// ------- object --------

var team = [['a', 17, 'forward'], 'b', 'c', 'd'];

console.log(team, 'team');





/*
var a = {
   property: value
}
*/



// var team = new Array(2);

// for(var i = 0; i < team.length; i++) {
//    team[i] = {
//       name: prompt('input name'),
//       age: +prompt('input age'),
//       role: prompt('input role'),
//    };
// }

// console.log(team, 'team');


// var navigation = {
//    width: '200px',
//    height:'200px',
//    direction: 'row',
//    textColor: 'blue',
//    backgroundColor: 'black'
// }

// var navigationItem = {
//    display: 'inline-block',
//    padding: '10px',
//    color: 'red'
// };


var human = {
   name: 'Valera',
   age: 25,
   lastName: 'Ternavskiy',
   walk: function() {
      console.log('walking...');
   }
}


human.walk();

console.log(human.name, 'name');

console.log(human.age, 'age');

console.log(human['age'], 'age');

var key = 'lastName';
console.log(human[key], key, 'key');

//ar = [] => arr.push(), Math.ramdom()

for(var property in human) {
   console.log(human[property], property);
}