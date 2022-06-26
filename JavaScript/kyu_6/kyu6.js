// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

const countAdjacentPairs = (string) => {
    const words = string.toLowerCase().split(" ");
    let solution = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i + 1] && words[i] !== words[i - 1]) {
            solution.push(words[i]);
        }
    }
    return solution;
};
// https://www.codewars.com/kata/consecutive-strings

function longestConsec(strarr, k) {
    let result = '';
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return result;
    }
    let longest = 0;
    for (let i = 0; i < strarr.length; ++i) {
        let string = strarr.slice(i, i + k).join('');
        if (string.length > longest) {
            longest = string.length;
            result = string;
        }
    }
    return result;
}
// https://www.codewars.com/kata/59c633e7dcc4053512000073

const consValue = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const consonants = string.split(/[aeiou]/gi);
    let result = [];
    consonants.forEach((element) => {
        let tempScore = 0;
        let tempSplit = element.split('');
        tempSplit.forEach((el) => {
            tempScore += 1 + alphabet.indexOf(el);
        });
        result.push(tempScore);
    });
    return Math.max(...result);
};

console.log(consValue('zodiac'));
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
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

const highesctScoringWord = (words) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    words = words.split(' ');
    let winner = '';
    let highest = 0;
    for (let i = 0; i < words.length; i++) {
        let current = 0;
        for (let j = 0; j < words[i].length; j++) {
            current += 1 + alphabet.indexOf(words[i][j]);
        }
        if (current > highest) {
            highest = current;
            winner = words[i];
        }
    }
    return winner;
};

console.log('azc'.charCodeAt(1) - 96);
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
// https://www.codewars.com/kata/kebabize

function kebabize(str) {
    return str
        .replace(/[0-9]/g, '')
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
}
// https://www.codewars.com/kata/loose-change

function looseChange(cents) {
    cents = Math.floor(cents);
    let coins = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
    if (cents <= 0) {
        return coins;
    }
    while (cents > 0) {
        while (cents >= 25) {
            coins.Quarters++;
            cents -= 25;
        }
        while (cents >= 10) {
            coins.Dimes++;
            cents -= 10;
        }
        while (cents >= 5) {
            coins.Nickels++;
            cents -= 5;
        }
        coins.Pennies = cents;
        cents = 0;
    }
    return coins;
}
// https://www.codewars.com/kata/prize-draw/javascript

function rank(st, we, n) {
    let names = st.split(',');
    let scores = [];
    if (!st) return 'No participants';
    if (n > names.length) return 'Not enough participants';
    for (i in names) {
        let score = 0;
        for (letter in names[i]) {
            score += names[i][letter].toLowerCase().charCodeAt(0) - 96;
        }
        scores.push([names[i], (score + names[i].length) * we[i]]);
    }
    scores
        .sort(function(a, b) {
            if (a[1] === b[1]) return a[0] < b[0];
            return a[1] - b[1];
        })
        .reverse();
    return scores[n - 1][0];
}

rank(
    'Olivai,Elijah,Naoh,Lyli,William,James,Abigail,Emily,Isabella,Madison,Ethan',
    [4, 5, 3, 6, 1, 1, 2, 5, 5, 3, 5],
    3
);
// https://www.codewars.com/kata/5853213063adbd1b9b0000be

const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
const position = [0, 0];
const moves = ['up', 'left', 'right', 'left', 'down'];

const streetFighterSelection = (fighters, position, moves) => {
    const selectedChars = [];
    const pos = [...position];

    moves.forEach((move) => {
        if (move === 'up') {
            pos[0] = 0;
        } else if (move === 'down') {
            pos[0] = 1;
        } else if (move === 'left') {
            if (pos[1] === 0) {
                pos[1] = 5;
            } else {
                pos[1] = pos[1] - 1;
            }
        } else if (move === 'right') {
            if (pos[1] === 5) {
                pos[1] = 0;
            } else {
                pos[1] = pos[1] + 1;
            }
        }
        selectedChars.push(fighters[pos[0]][pos[1]]);
    });

    return selectedChars;
};
// https://www.codewars.com/kata/simple-transposition

function simpleTransposition(text) {
    let a = '';
    let b = '';
    for (let i = 0; i < text.length; ++i) {
        if (i % 2 === 0) {
            a += text[i];
        } else {
            b += text[i];
        }
    }
    return a + b;
}
// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

const sortme = (array) => {
    // // const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // let sorted = array.map((element) => element.toLowerCase()).sort();
    // console.log(sorted);
    // let indeces = sorted.map((element) => sorted.indexOf(element));
    // // console.log(indeces);
    // let result = [];
    // return result;

    return array.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};
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
}// https://www.codewars.com/kata/the-supermarket-queue

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
// https://www.codewars.com/kata/556deca17c58da83c00002db

const tribonacci = (signature, n) => {
    if (!n) {
        return [];
    } else if (n < 3) {
        return signature.slice(0, n);
    }

    const result = [...signature];
    for (let i = 0; i < n - 3; i++) {
        result.push(result[i] + result[i + 1] + result[i + 2]);
    }
    return result;
};
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
