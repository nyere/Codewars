// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54
// DONE - additional task - convert compare and change letter casing into a function

const workOnStrings = (a, b) => {
    // setup
    const aLower = a.toLowerCase().split('');
    const bLower = b.toLowerCase().split('');
    const workingA = a.split('');
    const workingB = b.split('');
    const countsA = {};
    const countsB = {};

    const finalA = [];
    const finalB = [];

    // get char count
    for (let char of a.toLowerCase().split('')) {
        countsA[char] = countsA[char] ? countsA[char] + 1 : 1;
    }
    for (let char of b.toLowerCase().split('')) {
        countsB[char] = countsB[char] ? countsB[char] + 1 : 1;
    }

    // compare and change letter casing for word A
    for (let i = 0; i < workingA.length; i++) {
        if (bLower.includes(aLower[i])) {
            if (countsB[aLower[i]] % 2 === 1) {
                if (workingA[i] === workingA[i].toUpperCase()) {
                    finalA.push(workingA[i].toLowerCase());
                } else {
                    finalA.push(workingA[i].toUpperCase());
                }
            } else {
                finalA.push(workingA[i]);
            }
        } else {
            finalA.push(workingA[i]);
        }
    }

    // compare and change letter casing for word B
    for (let i = 0; i < workingB.length; i++) {
        if (aLower.includes(bLower[i])) {
            if (countsA[bLower[i]] % 2 === 1) {
                if (workingB[i] === workingB[i].toUpperCase()) {
                    finalB.push(workingB[i].toLowerCase());
                } else {
                    finalB.push(workingB[i].toUpperCase());
                }
            } else {
                finalB.push(workingB[i]);
            }
        } else {
            finalB.push(workingB[i]);
        }
    }

    return finalA.join('') + finalB.join('');
};
