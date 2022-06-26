// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
// t = maximum sum of distances
// k = number of towns to visit
// ts = list of towns/distances

const ts = [50, 55, 56, 57, 58];

const chooseBestSum = (t, k, ts) => {
    function possibleCombinations(array, length) {
        function c(l, r) {
            const ll = l.slice();
            console.log(r);
            if (r.length === length) {
                result.push(r);
                return;
            }
            while (ll.length) {
                c(ll, r.concat(ll.shift()));
            }
        }
        const result = [];
        c(array, []);
        return result;
    }

    const combinations = possibleCombinations(ts, k);

    for (let i = 0; i < combinations.length; i++) {
        combinations[i] = combinations[i].reduce((a, b) => a + b);
    }

    let finalResult = 0;

    for (let i = 0; i < combinations.length; i++) {
        if (combinations.includes(t)) {
            return t;
        }
        if (combinations[i] > finalResult && combinations[i] < t) {
            finalResult = combinations[i];
        }
    }

    return finalResult ? finalResult : null;
};

console.log(chooseBestSum(163, 3, ts)); // 163 is expected
