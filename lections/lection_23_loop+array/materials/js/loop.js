var age = 22;

// ....

age = age || 12;
second = 0 || 1 || 12 || NaN || true || false; // false || true || true || false || true || false

// ===== Loop ======
// do {
//     //loops body
// } while(false)


// do {
//     var login = prompt('Input login');
//     var isRepeat = confirm('Is repeat ?');
//     index++;
// } while (index < 3 && isRepeat);



// var index = 0; 

// while (index < 3) {
//     console.log('Do body loop' + index);
//     index++;
// }

// 0 - 1 - 2 - 3
for(var index = 0; index <= 3;  index++) {
    console.log('Do body loop' + index);
}

// 0 + 1 + 2  + 3

for(var index = 0, sum = 0; index <= 3;  index++) {
    sum = index + sum;
}

console.log(sum , 'sum');