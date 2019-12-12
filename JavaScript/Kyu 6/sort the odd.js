// https://www.codewars.com/kata/sort-the-odd/javascript

function sortAray(array) {
    if (!array) return array;
    let odd = [];
    let evenIndex = [];
    for (let i = 0; i < array.length; ++i) {
        if (array[i] % 2 === 0) evenIndex.push([i, array[i]]);
        else odd.push(array[i]);
    }
    odd.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < evenIndex.length; ++i) {
        odd.splice(evenIndex[i][0], 0, evenIndex[i][1]);
    }
    return odd;
}