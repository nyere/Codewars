// https://www.codewars.com/kata/unique-in-order
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

// function uniqueInOrder(input) {
//     let newArray = [];
//     for (let i = 0; i < input.length; ++i) {
//         newArray.push(input[i]);
//     }
//     let results = newArray.filter(
//         item => item !== newArray[newArray.indexOf(item) - 1]
//     );
//     console.log(newArray);
//     console.log(results);
// }

// uniqueInOrder('AAAABBBCCDAABBB');

// let string = [1, 2, 2, 3, 3];
// let array = [];
// for (let i = 0; i < string.length; ++i) {
//     console.log(string[i]);
//     array.push(string[i]);
// }
// array.push('a');

// let newarr = [];
// if ('a' !== array[20]) {
//     console.log('yes');
// }
