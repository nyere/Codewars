// https://www.codewars.com/kata/iq-test

function uniqueInOrder(input) {
    let sol = [];
    for (let index = 0; index < input.length; index++) {
        if (input[index] !== input[index - 1]) {
            sol.push(input[index]);
        }
    }
    return sol;
}
