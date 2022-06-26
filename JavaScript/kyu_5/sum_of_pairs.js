// https://www.codewars.com/kata/54d81488b981293527000c8f/javascript

const sumPairs = function (ints, s) {
    if (ints.length < 2) return undefined;
    let intSet = new Set();
    for (let i = 0; i < ints.length; i++) {
        let needed = s - ints[i];

        if (intSet.has(needed)) {
            return [needed, ints[i]];
        }
        intSet.add(ints[i]);
    }
    return undefined;
};
