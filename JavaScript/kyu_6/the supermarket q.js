// https://www.codewars.com/kata/the-supermarket-queue

function queueTime(array, n) {
    if (n === 1) return array.reduce((a, b) => a + b, 0);
    let booths = [];
    for (let i = 0; i < n; ++i) {
        booths[i] = 0;
    }
    array.forEach(e => {
        let bestBooth = booths.indexOf(Math.min(...booths));
        booths[bestBooth] += e;
    });
    return Math.max(...booths);
}
