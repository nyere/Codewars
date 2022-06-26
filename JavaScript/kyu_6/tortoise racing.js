// https://www.codewars.com/kata/tortoise-racing

function race(a, b, c) {
    if (b <= a) {
        return null;
    }
    let result = Math.floor((3600 * c) / (b - a));
    console.log(result);
    return [
        Math.floor(result / 3600),
        Math.floor(result / 60) % 60,
        result % 60
    ];
}
