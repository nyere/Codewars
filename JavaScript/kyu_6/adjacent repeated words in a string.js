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
