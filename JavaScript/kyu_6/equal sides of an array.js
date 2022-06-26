// https://www.codewars.com/kata/equal-sides-of-an-array

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; ++i) {
        if (
            arr.slice(0, i).reduce((acc, red) => acc + red, 0) ===
            arr.slice(i + 1).reduce((acc, red) => acc + red, 0)
        ) {
            return i;
        }
    }
    return -1;
}
