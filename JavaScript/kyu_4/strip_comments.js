// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) => {
    const lines = input.split('\n');
    const pattern = `[${markers.join('|')}]`;
    const masterPattern = new RegExp(pattern);

    const solution = lines.map((line) => {
        return line.split(masterPattern)[0].trim();
    });
    return solution.join('\n');
};
